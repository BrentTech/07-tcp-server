'use strict';

const events = require('./lib/events.js');


let dispatch = (buffer, userId, socketPool) => {
  parse(buffer, userId, socketPool);
};

let parse = (buffer, userId, socketPool) => {
  events.emit('parsed-buffer', buffer, userId, socketPool);
};

events.on('emit-socket', dispatch);

module.exports = {parse, dispatch};