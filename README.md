![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## 07 TCP Server

### Author: Brent Woodward
#### Contributors: Becca & Heather

### Links and Resources
[![Build Status](https://www.travis-ci.com/BrentTech/07-tcp-server.svg?branch=master)](https://www.travis-ci.com/BrentTech/07-tcp-server)
* [repo](https://github.com/BrentTech/07-tcp-server)
* [travis](https://www.travis-ci.com/BrentTech/07-tcp-server)

### Modules
#### `events.js`
Establishes new events instance.

#### `actions.js`
##### Exported Values and Methods
###### `@all -> callback function`
Writes message to all sockets
###### `@nick -> callback function`
Assigns given nickname to socket connection
###### `@quit -> callback function`
Breaks socket connections
###### `@list -> callback function`
Lists all active connections
###### `@dm -> callback function`
Writes message to specific socket


#### `logger.js`
##### Exported Values and Methods
###### `parseBuffer(buffer, userId, socketPool) -> event.emit`

###### `dispatchCommand(buffer, userId, socketPool) -> function`



### Setup
#### `.env` requirements
* `PORT` - 3001 or setup by env

#### Running the app
* `nodemon chatroom.js`
* Connections: `nc localhost 3001`
  * Connects terminal to chat server. Multiple connects are able to communcate with each other.

#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?
