'use strict';

const net = require('net');

const uuid = require('uuid/v4');

const port = process.env.PORT || 3001;
const server = net.createServer();
const socketPool = {};
const actions = {};

// Module files
const app = require('./app.js');
const logger = require('./lib/logger.js');
const events = require('./lib/events.js');


server.on('connection', (socket) => {
  let id = uuid();
  socketPool[id] = {
    id:id,
    nickname: `User-${id}`,
    socket: socket,
  };
  socket.on('data', (buffer) => events.emit('emitting-socket', buffer, id, socketPool));
  console.log('Someone has connected');
});

server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});
