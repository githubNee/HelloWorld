var express = require('express');
var router = express.Router();
var request = require('request');

router.route('/')
.post(function(req,res,next){
	if(req.body['chat'] == null) {
        res.sendStatus(400);
    } else {
    	var apiKey = "CC124TA5rtlH0Gywnf5kS-58hQQ",
  	 		url = "https://www.cleverbot.com/getreply";
	        chat = req.body['chat'];

	    url += "?key=" + apiKey + "&input=" + chat;

        var opts = {
        	url: url,
        	method: "GET"
        }
        request(opts, function (error, response, body) {
            var data = {},
            	value = {};
            if (!error) {
                data = JSON.parse(body);
                value.chat = data['output'];
                res.send(value);
            } else 
                res.sendStatus(500);
        });
    }

})



module.exports = router;