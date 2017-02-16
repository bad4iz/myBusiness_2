define(function(require) {
  'use strict';
  
  var Backbone = require('backbone'),
     template = require('text!./templates/contents.html'),
     ContentView = require('./content-view'),
     $ = require('jquery'),
     _ = require('underscore');
  
  return Backbone.View.extend({
    template: _.template(template),
    className: 'content',
    
    initialize: function(options) {
      this.container = options.container;
      this.collection.on('add', this.addOne, this);
    },
    render: function() {
      this.collection.each(this.addOne, this);
      this.container.html(this.$el);
      
      return this;
    },
    
    addOne: function(model) {
      var contentView = new ContentView({model: model});
      this.$el.append(contentView.render().el);
    }
  });
});