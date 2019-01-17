var template = require('ak-template');
var Backbone = require('backbone');

require('./index.scss');

var twitterRealTime = require('./index.tpl');
var Tweet = require('./components/tweet');

module.exports = Backbone.View.extend({
  'el': '#app',
  'template': template(twitterRealTime),
  'render': function render () {
    this.$el.html(this.template());
    var tweet = new Tweet({
      'collection': this.collection
    });

    tweet.render();

    return this;
  }
});
