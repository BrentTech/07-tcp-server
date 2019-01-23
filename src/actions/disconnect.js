'use strict';

const events = require('../lib/events');
const socketPool = require('../lib/socket-pool.js');

let quit = (data, userId) => {
  let nickname = socketPool[userId].nickname;
  socketPool.remove(userId);
  events.emit('@system', `${nickname} has left the chat\n`);
};

events.on('@quit', quit);

module.exports = {};
