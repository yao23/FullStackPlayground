var client = require('./rpc_client');

// Invoke 'add'
client.add(1, 2, function(response) {
    console.assert(response == 3);
});

// Invoke 'getNewsSummariesForUser'
client.getNewsSummariesForUser('test_user', 1, function(response) {
    console.assert(response != null);
});