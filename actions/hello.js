'use strict';

const socketPool = require('../lib/socket-pool.js');
const events = require('../lib/events.js');

let sayHello = (data, userId) => {
  console.log('This is really from Hello');
  events.emit('@all', data, userId);
};

events.on('@hello', sayHello);

module.exports = sayHello;
