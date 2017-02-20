define(function(require) {
  'use strict';
  
  var Backbone = require('backbone'),
     Model = require('./model');
  
  var Collection = Backbone.Collection.extend({
    model: Model
  });
  
  var texts = [
    {
      title: 'one'
    },
    {
      title: 'two'
    },
    {
      title: 'three'
    }
  ];
  
  return new Collection(texts);
});