'use strict';

const events = require('../lib/events');
const socketPool = require('../lib/socket-pool.js');

let changeNickname = (data, userId) => {
  socketPool[userId].nickname = data.target;
};

events.on('@nick', changeNickname);

module.exports = changeNickname;
