var express = require('express');
var tty = require('./dependencies/tty.js/lib/tty.js');

var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

var app = tty.createServer({
  shell: 'bash',
  users: {
    nee: 'nee960610',
    wang: 'wang961125'
  },
  port: 3000
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

  
app.get('/', function(req,res,next){
	console.log('hai ~');
    res.sendFile('public/welcome.html', { root: __dirname });
});
  
var chat = require('./routes/chat');
app.use('/api/chat',chat); 

app.get('/shell',function(req,res,next){
	res.sendFile('public/html/shell.html', {root: __dirname});
})

app.use((req,res,next)=>{
    res.send("404 not found");
})


app.listen();