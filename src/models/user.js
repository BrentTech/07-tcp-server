'use strict';

const uuid = require('uuid/v4');

/**
 *
 * Constructor class for new user.
 * @class User
 */
class User {
  constructor(socket) {
    let id = uuid();
    this.id = id;
    this.nickname = `User-${id}`;
    this.socket = socket;
  }
}

module.exports = User;