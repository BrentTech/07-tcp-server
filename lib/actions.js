'use strict';

const logger = require('./logger.js');
const events = require('./events.js');

const actions = {};


actions['@all'] =  (data, userId, socketPool) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};

actions['@nick'] =  (data, userId, socketPool) => {
  socketPool[userId].nickname = data.target;
};

actions['@quit'] = (data, userId, socketPool) => {
  socketPool[userId] = null;
};

actions['@list'] = (data, userId, socketPool) => {
  for(let connection in socketPool) {
    console.log
  }
};


actions['@dm'] = (data, userId, socketPool) => {
  for(let connection in socketPool){
    let user = socketPool[connection];
    if(user.nickname === data.target){
      user.socket.write(`<<<${socketPool[userId]}.nickname>>> ${data.message}\n`);
    }
  }
};

// events.on('@dm', actions['@dm']);

module.exports = {actions};