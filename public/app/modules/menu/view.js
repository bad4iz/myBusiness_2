define(function(require) {
  'use strict';
  
  var Backbone = require('backbone'),
     template = require('text!./templates/menu.html'),
     backTemplate = require('text!./templates/backTemplate.html'),
     _ = require('underscore');
  
  return Backbone.View.extend({
    template: _.template(template),
    
    initialize: function(options) {
      this.container = options.container;
      this.active = options.active;
      
      if (options.back) {
        this.template = _.template(backTemplate);
      } else {
        this.template = _.template(template);
      }
      
      this.render();
    },
    
    events: {
      'click .back': 'back'
    },
    
    render: function() {
      this.$el.html(this.template({active: this.active}));
      this.container.html(this.$el);
      
      return this;
    },

    back: function() {
      Backbone.history.history.back();
    }
  });
  
});