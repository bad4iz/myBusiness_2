define(function(require) {
  'use strict';

  var Backbone = require('backbone'),
      template = require('text!./templates/contact.html'),
      $ = require('jquery'),
      _ = require('underscore');

  return Backbone.View.extend({
    className: '',

    initialize: function(options) {
        this.template = _.template(template);
      if (options.container) {
        this.container = options.container;
      }
    },

    render: function() {
      this.$el.html(this.template({model: this.model.toJSON()}));
      if (this.container) {
        this.container.html(this.$el);
      }
      return this;
    },

    remove: function() {
      console.log('remove contact details');
      Backbone.View.prototype.remove.apply(this);
    }
  });
});