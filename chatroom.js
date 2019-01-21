'use strict';

const net = require('net');

const port = process.env.PORT || 3001;
const server = net.createServer();
const socketPool = require('./lib/socket-pool.js');
const actions = require('require-directory')(module, './actions');


const app = require('./app.js');
const logger = require('./lib/logger.js');
const events = require('./lib/events.js');
const User = require('./models/user.js');


// Socket Pool Module
server.on('connection', (socket) => {
  let user = new User(socket);
  socketPool[user.id] = user;
  socket.on('data', (buffer) => events.emit('emit-socket', buffer, user.id, socketPool));
});

server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});
