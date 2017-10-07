const redisClient = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = 3600;

module.exports = function(io) {
    const sessionPath = '/temp_session';
    // collaboration sessions
    const collaborations = {};
    const socketIdToSessionId = {};

    io.on('connection', (socket) => {
        // console.debug(socket);
        // const message = socket.handshake.query['message'];
        // console.debug(message);
        // io.to(socket.id).emit('message', 'hahahahahaha from server');
        const sessionId = socket.handshake.query['sessionId'];
        socketIdToSessionId[socket.id] = sessionId;

        // if (!(sessionId in collaborations)) {
        //     collaborations[sessionId] = {
        //         participants: []
        //     };
        // }
        // collaborations[sessionId]['participants'].push(socket.id);
        if (sessionId in collaborations) {
            collaborations[sessionId]['participants'].push(socket.id);
        } else {
            redisClient.get(sessionPath + '/' + sessionId, data => {
                // if redis has data and put it into cachedInstructions
                if (data) {
                    // console.debug('session terminated before, pulling back from redis');
                    collaborations[sessionId] = {
                        'cachedInstructions': JSON.parse(data),
                        'participants': []
                    }
                } else {
                    // console.debug('creating new session');
                    collaborations[sessionId] = {
                        'cachedInstructions': [],
                        'participants': []
                    }
                }
                collaborations[sessionId]['participants'].push(socket.id);
            });
        }

        // put data change (delta) into memory before forward event
        socket.on('change', delta => {
            // console.debug('change ' + socketIdToSessionId[socket.id] + ' ' + delta);
            // const sessionId = socketIdToSessionId[socket.id];
            // if (sessionId in collaborations) {
            //     const participants = collaborations[sessionId]['participants'];
            //     for (let participant of participants) {
            //         if (socket.id != participant) {
            //             io.to(participant).emit('change', delta);
            //         }
            //     }
            // } else {
            //     console.warn('WARNING');
            // }   
            const sessionId = socketIdToSessionId[socket.id];
            if (sessionId in collaborations) {
                collaborations[sessionId]['cachedInstructions'].push(['change', delta, Date.now()]);
            }
            forwardEvent(socket.id, 'change', delta);
        });

        socket.on('cursorMove', cursor => {
            // console.debug('cursorMove ' + socketIdToSessionId[socket.id] + ' ' + cursor);
            cursor = JSON.parse(cursor);
            cursor['socketId'] = socket.id;
            forwardEvent(socket.id, 'cursorMove', JSON.stringify(cursor));
        });

        socket.on('restoreBuffer', () => {
            const sessionId = socketIdToSessionId[socket.id];
            // console.debug('restore buffer for session: ' + sessionId);
            if (sessionId in collaborations) {
                const instructions = collaborations[sessionId]['cachedInstructions'];
                for (let instruction of instructions) {
                    socket.emit(instruction[0], instruction[1]);
                }
            } else {
                console.warn('sessionId is not in collaborations');
            }
        });

        // store data into redis if everyone leaves, otherwise remove user from session
        socket.on('disconnect', () => {
            const sessionId = socketIdToSessionId[socket.id];
            // console.debug('socket ' + socket.id);
            let foundAndRemove = false;
            if (sessionId in collaborations) {
                const participants = collaborations[sessionId]['participants'];
                const index = participants.indexOf(socket.id);
                if (index >= 0) {
                    participants.splice(index, 1);
                    foundAndRemove = true;
                    if (participants.length == 0) {
                        const key = sessionPath + '/' + sessionId;
                        const value = JSON.stringify(collaborations[sessionId]['cachedInstructions']);
                        redisClient.set(key, value, redisClient.redisPrint);
                        redisClient.expire(key, TIMEOUT_IN_SECONDS);
                        delete collaborations[sessionId];
                    }
                }
            } else {
                console.warn('sessionId is not in collaborations');
            }
        });
    });

    const forwardEvent = function(socketId, eventName, dataString) {
        const sessionId = socketIdToSessionId[socketId];
        if (sessionId in collaborations) {
            const participants = collaborations[sessionId]['participants'];
            for (let participant of participants) {
                if (socketId != participant) {
                    io.to(participant).emit(eventName, dataString);
                }
            }
        } else {
            console.warn('WARNING');
        }
    }
}