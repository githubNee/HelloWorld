var express = require('express');
var app = express();

var path = require('path');
var request = require('request');

app.use(express.static(path.join(__dirname, 'public')));
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
server.listen(port);

app.get('/', function(req,res,next){
    res.sendFile('index.html')
});

var chat = require('./routes/chat');
app.use('/api/chat',chat);