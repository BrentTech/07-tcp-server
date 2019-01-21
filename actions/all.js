'use strict';

const events = require('../lib/events.js');
const socketPool = require('../lib/socket-pool.js');

let sendToAll = (data, userId) => {
  for (let connection in socketPool) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};

events.on('@all', sendToAll);

module.exports = sendToAll;
