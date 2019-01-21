'use strict';

const events = require('./lib/events.js');
const logger = require('./lib/logger.js');


events.on('emitting-socket', dispatchAction);

function dispatchAction(buffer, userId, socketPool) {
  parse(buffer, userId, socketPool);
}

function parse(buffer, userId, socketPool) {
  events.emit('parse-buffer', buffer, userId, socketPool);
}

module.exports = {parse, dispatchAction};