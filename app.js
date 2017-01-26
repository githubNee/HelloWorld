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

var io = require('socket.io')(server);
io.on('connection', function(socket){
// Create terminal
	var term = pty.spawn('sh', [], {
	   name: 'xterm-color',
	   cols: 80,
	   rows: 30,
	   cwd: process.env.HOME,
	   env: process.env
	});
	// Listen on the terminal for output and send it to the client
	term.on('data', function(data){
	   socket.emit('output', data);
	});
	// Listen on the client and send any input to the terminal
	socket.on('input', function(data){
	   term.write(data);
	});
	// When socket disconnects, destroy the terminal
	socket.on("disconnect", function(){
	   term.destroy();
	});
});
app.get('/shell',function(req,res,next){
	res.sendFile('public/html/shell.html', { root: __dirname })
});

app.use((req,res,next)=>{
    res.send("404 not found");
})