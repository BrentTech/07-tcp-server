'use strict';

const logger = require('./logger.js');
const events = require('./events.js');

const actions = {};


/**
 *
 * function for writing to all socket connections
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
actions['@all'] = (data, userId, socketPool) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};

/**
 *
 * function for associating a given string with a socket connection
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
actions['@nick'] = (data, userId, socketPool) => {
  socketPool[userId].nickname = data.target;
  for(let connection in socketPool) {
    console.log(connection);
  }
};

/**
 *
 * function that terminates socket connection
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
actions['@quit'] = (data, userId, socketPool) => {
  socketPool[userId] = null;
};

/**
 *
 * function that lists all active connections
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
actions['@list'] = (data, userId, socketPool) => {
  for(let connection in socketPool) {
    console.log(connection.nickname);
  }
};


/**
 *
 * function that writes message to a given socket connection or nickname
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
actions['@dm'] = (data, userId, socketPool) => {
  for(let connection in socketPool){
    let user = socketPool[connection];
    if(user.nickname === data.target){
      user.socket.write(`<<<${socketPool[userId]}.nickname>>> ${data.message}\n`);
    }
  }
};

module.exports = {actions};