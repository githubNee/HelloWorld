var express = require('express');
var app = express();

var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
server.listen(port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'localhost');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , PRIVATE-TOKEN');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');

  next();
});

app.get('/', function(req,res,next){

    res.sendFile('index.html')
});

var chat = require('./routes/chat');
app.use('/api/chat',chat);


app.use((req,res,next)=>{
    res.send("404 not found");
})