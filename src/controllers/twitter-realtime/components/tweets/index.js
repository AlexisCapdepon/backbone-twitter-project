var template = require('ak-template');
var Backbone = require('backbone');

var tweetTpl = require('./tweet.tpl');

module.exports = Backbone.View.extend({
  'el': '.mentions',
  'template': template(tweetTpl),
  'initialize': function initialize () {
    this.listenTo(this.collection, 'update', this.render);
  },

  'render': function render () {
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  }
});
