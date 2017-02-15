define(function(require) {
  'use strict';

  var Backbone = require('backbone'),
      Model = require('./model');

  var ImageCollection = Backbone.Collection.extend({
      model: Model
  });

    var images = [
        {
            src: 'img/backbone.png',
            title: '#'
        },
        {
            src: 'img/backbone1.png',
            title: '#'
        },
        {
            src: 'img/backbone2.jpg',
            title: '#'
        },
        {
            src: 'img/backbone3.jpg',
            title: '#'
        },
        {
            src: 'img/backbone4.png',
            title: '#'
        },
        {
            src: 'img/le.jpg',
            title: '#'
        }
    ];

  return  new ImageCollection(images);
});