'use strict';

const events = require('../lib/events.js');
const socketPool = require('../lib/socket-pool.js');

let dm = (data, userId) => {
  for(let connection in socketPool){
    let user = socketPool[connection];
    if(user.nickname === data.target){
      user.socket.write(`<<<${socketPool[userId]}.nickname>>> ${data.message}\n`);
    }
  }
};

events.on('@dm', dm);

module.exports = dm;
