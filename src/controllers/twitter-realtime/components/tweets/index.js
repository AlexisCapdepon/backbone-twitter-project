var template = require('ak-template');
var Backbone = require('backbone');

var tweetTpl = require('./tweet.tpl');

module.exports = Backbone.View.extend({
  'el': '.mentions',
  'template': template(tweetTpl),
  /**
   * create the list of tweet
   * @constructor
   */
  'initialize': function initialize () {
    this.listenTo(this.collection, 'add', this.render);
  },
  /**
   * add the collection of tweet on the page.
   * @render
   * @return {this} the view
   */
  'render': function render () {
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  }
});
