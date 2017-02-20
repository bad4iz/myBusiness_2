define(function(require) {
  'use strict';
  
  var Controller = require('controller'),
     ContentsView = require('./contents-view'),
     Collection = require('./collection'),
     _ = require('underscore'),
     slick = require('slick');
  
  // Controller provides Public API
  return Controller.extend({
    initialize: function() {
    },
    
    showList: function(container) {
      this.collection = Collection;
      this.contentsView = new ContentsView({
        container: container,
        collection: this.collection
      });
      this.contentsView.render();
    }
  });
});