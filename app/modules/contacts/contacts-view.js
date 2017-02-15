define(function(require) {
  'use strict';

  var Backbone = require('backbone'),
      template = require('text!./templates/contacts.html'),
      ContactView = require('./contact-view'),
      $ = require('jquery'),
      _ = require('underscore');

  return Backbone.View.extend({
    template: _.template(template),

    initialize: function(options) {
        console.log('инициализация contacts-view.js');
        this.container = options.container;
        this.collection.on('add', this.addOne, this);
    },

    render: function() {
        this.collection.each(this.addOne, this);

        this.container.html(this.$el);
        return this;
    },

      addOne: function (model) {
          console.log('инициализация contacts-view.js');

          //создавать новый дочерний вид
          var contactView = new ContactView({model: model});
          // добавлять его в корневой элемент
          this.$el.append(contactView.render().el);
      }
  });
});