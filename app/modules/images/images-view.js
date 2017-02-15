define(function(require) {
  'use strict';

  var Backbone = require('backbone'),
      template = require('text!./templates/images.html'),
      ImageView = require('./image-view'),
      $ = require('jquery'),
      _ = require('underscore');

    return Backbone.View.extend({
        template: _.template(template),
        tagName: 'section',

        className: 'center slider',

        initialize: function(options) {
            console.log('инициализация images-view.js');
            this.container = options.container;
            this.collection.on('add', this.addOne, this);
        },
        render: function () {
            this.collection.each(this.addOne, this);

            this.container.html(this.$el);
            return this;
        },

        addOne: function (model) {
            //создавать новый дочерний вид
            var imageView = new ImageView({model: model});
            // добавлять его в корневой элемент
            this.$el.append(imageView.render().el);
        }
    });
});