var client = require('./rpc_client');

// Invoke 'add'
client.add(1, 2, function(response) {
    console.assert(response == 3);
});