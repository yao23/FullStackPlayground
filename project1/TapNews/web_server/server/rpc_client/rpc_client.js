var jayson = require('jayson');

// create a client
var client = jayson.client.http({
    port: 4040,
    hostname: 'localhost'
});

// Test RPC method
function add(a, b, callback) {
    client.request('add', [a, b], function(err, error, response) {
        if (err) {
            throw err;
        }
        console.log(response);
        callback(response);
    });
}

function getNewsSummariesForUser(userId, pageNum, callback) {
    client.request('getNewsSummariesForUser', [userId, pageNum], function(err, error, response) {
        if (err) {
            throw err;
        }
        console.log(response);
        callback(response);
    });
}

// Log a news click event for a user
function logNewsClickForUser(user_id, news_id) {
    client.request('logNewsClickForUser', [user_id, news_id], function(err, error, response) {
        if (err) throw err;
        console.log(response);
    });
}
  
module.exports = {
    add: add,
    getNewsSummariesForUser: getNewsSummariesForUser,
    logNewsClickForUser: logNewsClickForUser
};
