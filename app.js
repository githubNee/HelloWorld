var express = require('express');
var app = express();

var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');	

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , PRIVATE-TOKEN');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

  
app.get('/', function(req, res, next) {
	res.sendFile('public/html/help.html', {root:__dirname});
})
app.get('/home', function(req,res,next){
    res.sendFile('public/welcome.html', { root: __dirname });
});
  
var chat = require('./routes/chat'); 	
app.use('/api/chatChi',chat); 
var chatEng = require('./routes/chatEn');
app.use('/api/chatEng',chatEng);

app.use((req,res,next)=>{
    res.send("404 not found");
})

console.log("node start");


app.listen(3000);