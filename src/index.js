// Dependencies
var Backbone = require('backbone');

// Collections
var MentionCollection = require('./collections/mentions.js');

// Controllers
var TwitterRealTimeController = require('./controllers/twitter-realtime');

require('./index.scss');
// Router
var Router = Backbone.Router.extend({
  'routes': {
    '*actions': 'tweet'
  }
});

var router = new Router();

router.on('route:tweet', function defautRoute () {
  var twitterRealTimeController = new TwitterRealTimeController({
    'collection': MentionCollection
  });

  twitterRealTimeController.render();
});

Backbone.history.start({
  'pushState': true
});
