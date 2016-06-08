 
var my_http = require("http");
socketio = require('socket.io');

var server = my_http.createServer().listen(2308, '127.0.0.1', function(){
	console.log('Socket.IO server started at %s:%s!', '127.0.0.1', 2308);
});
 


io = socketio.listen(server);

var run = function(socket){
    socket.emit('message', { message: 'Chào mừng chat với Todo' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
}

io.sockets.on('connection', run);

