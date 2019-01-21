'use strict';

const events = require('../lib/events');
const socketPool = require('../lib/socket-pool.js');

let quit = (data, userId) => {
  socketPool[userId] = null;
};

events.on('@quit', quit);

module.exports = quit;
