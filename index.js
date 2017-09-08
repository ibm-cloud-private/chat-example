var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var cowsay = require('cowsay');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){

  var msg1 = cowsay.say({
	                  text : msg,
	                  e : "oO",
	                  T : "U "
             });
    
	  
	  
    io.emit('chat message', msg);
    
	  console.log("msg1:" + msg1);
	  
    io.emit('chat message', msg1);
    
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
