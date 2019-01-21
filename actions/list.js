'use strict';

const events = require('../lib/events');
const socketPool = require('../lib/socket-pool.js');

let list = (data, userId) => {
  for(let user in socketPool) {
    console.log(socketPool[userId].nickname);
  }
};

events.on('@list', list);

module.exports = list;
