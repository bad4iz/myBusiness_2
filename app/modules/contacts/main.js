define(function(require) {
  'use strict';

  var Controller = require('controller'),
      ContactsView = require('./contacts-view'),
      Collection = require('./collection'),
      _ = require('underscore');

  // Controller provides Public API
  return Controller.extend({
    showList: function(container) {
      this.collection = Collection;
      
      this.collectionView = new ContactsView({
        container: container,
        collection: this.collection
      });
      this.collectionView.render();
    }
  });
});