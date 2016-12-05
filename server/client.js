//how to use me, dood
// var socketPromise = init();
// socketPromise.then(function(socket){
//     socket.subscribe(function(message){
//         console.log('yuhhhhh : ', message);
//     });
//     socket.sendMessage('/joe', 'string');
// });

var ws = require('./socketConnection');

var SocketLibrary = function(socket){
    this.socket = socket;
};

SocketLibrary.prototype.sendMessage = function(url, body){
    var str = JSON.stringify({url: url, body:body});
    this.socket.sendUTF(str);
};

SocketLibrary.prototype.subscribe = function(cb){
    this.socket.on('message', function(message) {
        var str = JSON.parse(message.utf8Data);
        cb(str);
            
    });  
};

ws.then(function(socket){
    var socketbiblioteca = new SocketLibrary(socket);
    return socketbiblioteca;
});

module.exports = ws;