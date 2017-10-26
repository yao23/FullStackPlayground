const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const config = require('../config/config.json');

module.exports = (req, res, next) => {
    console.log('auth_checker: req: ' + req.headers);

    if (!req.headers.authorization) {
        return res.status(401).end();
    }

    // Get the last part from an authorization header string like "bearer token-value"
    const token = req.headers.authorization.split(' ')[1];

    console.log('auth_chekcer: token: ' + token);

    // Decode the token using the secret
    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).end();
        }

        // Check if a user exists
        return User.findById(decoded.sub, (userErr, user) => {
            if (userErr || !user) {
                return res.status(401).end();
            }

            return next();
        });
    });
};