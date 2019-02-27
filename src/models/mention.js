var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  'default': {
    'createAt': '',
    'id': '',
    'text': '',
    'user': {
      'name': '',
      'avatar': ''
    },
    'reply_count': 0,
    'retweet_count': 0,
    'favorite_count': 0,
    'coordonates': false
  }
});
