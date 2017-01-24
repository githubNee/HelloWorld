var express = require('express');
var router = express.Router();
var request = require('request');

router.route('/')
.post(function(req,res,next){
    if(req.body['chat'] == null) {
        res.sendStatus(400);
    } else {
        var chat = req.body['chat'];

        var reqBody = {};
        reqBody.key = '35618a945770417a86bf7e8179283680';
        reqBody.info = chat;
        reqBody.userid = 0;
        var opts = {
            url: "http://www.tuling123.com/openapi/api",
            method : 'POST',
            headers: {
                'User-Agent': 'request',
                'content-type': 'application/json'
            },
        };
        opts.body = JSON.stringify(reqBody);
        request(opts, function (error, response, body) {
            var data = {};
            if (!error) {
                data = JSON.parse(body);
                res.send(data);
            } else 
                res.sendStatus(500);
        });
    }
})



module.exports = router;