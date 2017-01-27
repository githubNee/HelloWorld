var express = require('express');
var app = express();

var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');
var pty = require('pty.js');
  
app.use(express.static(path.join(__dirname, 'public')));
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
server.listen(port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

  
app.get('/', function(req,res,next){
    res.sendFile('public/welcome.html', { root: __dirname })

});
  
var chat = require('./routes/chat');
app.use('/api/chat',chat); 
app.use('/api/chat',chat);

app.get('/shell',function(req,res,next){
	res.sendFile('public/html/shell.html', { root: __dirname })
});

app.use((req,res,next)=>{
    res.send("404 not found");
})



var tty = require('tty.js');

var app2 = tty.createServer({
  shell: 'bash',
  users: {
    nee: 'nee960610',
    wang: 'wang961125'
  },
  port: 8000
});


app2.listen();