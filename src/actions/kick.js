'use strict';

const socketPool = require('../lib/socket-pool.js');
const events = require('../lib/events.js');

let kick = (data, userId) => {

  for( let connection in socketPool ) {
    let user = socketPool[connection];
    if ( user.nickname === data.target ) {
      socketPool.remove(user.id);
      events.emit('@system', `${user.nickname} has been kicked out of the chat by ${socketPool[userId].nickname}. It is a sad day!\n` );
    }
  }

};

events.on('@kick', kick);

module.exports = {};