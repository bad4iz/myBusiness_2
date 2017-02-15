define(function(require) {
  'use strict';

  var Backbone = require('backbone'),
      template = require('text!./template.html'),
      $ = require('jquery'),
      _ = require('underscore');

  return Backbone.View.extend({
    template: _.template(template),

      id: 'sdsfs',

      initialize: function(options) {
          console.log('new books container view');
          this.container = options.container;
          this.render();
      },

      render: function() {
          this.$el.html(this.template());
          this.container.html(this.$el);
          return this;
      },
    getMenuContainer: function() {
      return this.$('.menu');
    },

    getImageContainer: function() {
      return this.$('.books-list');
    },

    getTextConteiner: function () {
          return this.$('.text');
    }
  });
});