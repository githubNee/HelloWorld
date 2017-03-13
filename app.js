var express = require('express');
var app = express();

var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');	

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

  
app.get('/', function(req,res,next){
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