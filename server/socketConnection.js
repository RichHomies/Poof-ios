#!/usr/bin/env node
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();



function connectClient(){
    return new Promise(function (resolve, reject) {
        client.on('connectFailed', function(error) {
            console.log('Connect Error: ' + error.toString());
            reject(error);
        });

        client.on('connect', function(connection) {
            console.log('WebSocket Client Connected');
            connection.on('error', function(error) {
                console.log("Connection Error: " + error.toString());
                reject(error);
            });
            connection.on('close', function() {
                console.log('echo-protocol Connection Closed');
            });

            resolve(connection);
        });

        client.connect('ws://localhost:8080/', 'echo-protocol');
    });
}





module.exports = connectClient();