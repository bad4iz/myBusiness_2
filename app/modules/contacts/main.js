define(function(require) {
  'use strict';

  var Controller = require('controller'),
      ContactsView = require('./contacts-view'),
      Collection = require('./collection'),
      _ = require('underscore');

  // Controller provides Public API for Contacts module
  return Controller.extend({
    initialize: function() {
      console.log('init contact widget');
    },

    showList: function(container) {

      this.collection = Collection;
      
      this.collectionView = new ContactsView({
        container: container,
        collection: this.collection
      });

      this.collectionView.render();
    },

    remove: function() {
      console.log('remove books widget');
    }
  });
});