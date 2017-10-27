var express = require('express');
var router = express.Router();

var rpc_client = require('../rpc_client/rpc_client');

router.get('/userId/:userId/pageNum/:pageNum', function(req, res, next) {
    userId = req.params['userId'];
    pageNum = req.params['pageNum'];
    
    rpc_client.getNewsSummariesForUser(userId, pageNum, function(response) {
      res.json(response);
    });
  });
  
module.exports = router;
  