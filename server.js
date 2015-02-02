var WebSocketServer = require('ws').Server
, wss = new WebSocketServer({port: 8080});

wss.on('open', function open() {
      ws.send('connected');
});

wss.on('connection', function(ws) {
      wss.on('message', function(message) {
            console.log('received: %s', message);
            ws.send(message);
      });
      ws.send('hello World!');
});
