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

#### `parse.js`
Passed a buffer and breaks up the string. Checks what the @ symbol is assigned to at the start of the string and processes the associated command.

#### `socket-poop.js`
Socket Add creates a new user connected in the socket pool.

Socket Remove removed a user from the socket pool and destroys that socket connection.


#### `Actions`
##### Supported CLI Actions for Chat
###### @all
Sends a message to everyone connected to the server.
###### @dm
Sends a direct message to the user designated (nickname)
###### @quit
Disconnects you from the app, and alerts
###### @kick
Disconnects someone from the app, and alerts
###### @list
Lists everyone who is connected to the app
###### @nick
Assigns a custom nickname to your connections
###### @hello
Simple command to greet everyone else connected.

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
