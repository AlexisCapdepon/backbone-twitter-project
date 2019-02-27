// Dependencies
var Backbone = require('backbone');
var io = require('socket.io-client');

// var moment = require('moment');

// Models
var Mention = require('../models/mention.js');

// Collection

var Mentions = Backbone.Collection.extend({
  'model': Mention,
  /**
  * initialisation de la collection.
  * @initialize
  * @return {object} collection
  */
  'initialize': function initialize () {
    var socket = io('http://localhost:8090');

    /**
    * connection to socket
    * @connect
    */
    socket.on('connection', function connect () {

    });
    /**
     * call the socket server.
     * @loadTweets
     * @param {object} data - new tweet.
     * @return collection
     */
    socket.on('tweets', function loadTweets (data) {
      this.addMention(data);
    }.bind(this));
  },
  /**
   * add mention to collection.
   * @addMention
   * @param {object} mention - new tweet to add.
   * @return {this} collection
   */
  'addMention': function addMention (mention) {
    if (this.length >= 6) {
      this.pop();
      this.unshift(mention);
      return;
    }
    this.unshift(mention);
  }
});

module.exports = new Mentions();
