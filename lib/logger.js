'use strict';

const events = require('./events.js');
const app = require('../app.js');
const actions = require('./actions.js');


events.on('parse-buffer', parseBuffer);
events.on('accept-buffer', dispatchCommand);

module.exports = { parseBuffer, dispatchCommand};

function parseBuffer(buffer, userId, socketPool) {
  let text = buffer.toString().trim();
  if (!text.startsWith('@')) { return null; }
  let [command, payload] = text.split(/\s+(.*)/);
  let [target, message] = payload.split(/\s+(.*)/);
  events.emit('accept-buffer', { command, payload, target, message }, userId, socketPool);
}

function dispatchCommand(entry, userId, socketPool) {
  if (entry && typeof actions.actions[entry.command] === 'function') {
    actions.actions[entry.command](entry, userId, socketPool);
  }
}
