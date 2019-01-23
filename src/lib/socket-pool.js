'use strict';

const socketPool = {};

/**
 *
 * Add new user to pool with unique id
 * @param user name of user
 */
socketPool.add = (user) => {
  socketPool[user.id] = user;
};

/**
 *
 * Remove use by unique id
 * @param id by UUID v4
 */
socketPool.remove = (id) => {
  if( ! socketPool[id] && socketPool[id].socket ) { return; }
  let socket = socketPool[id].socket;
  socket.destroy();
  delete socketPool[id];
};

module.exports = socketPool;