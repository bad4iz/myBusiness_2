define(function(require) {
  'use strict';

  var Controller = require('controller'),
      View = require('./view'),
      $ = require('jquery'),
      MenuModule = require('modules/menu'),
      // Mem = require('mem'),

      // Modules used in this screen
      // ContactsModule = require('modules/contacts'),


  ContactsScreenController = Controller.extend({
    routes: {
      'contacts': 'showContacts',
      'contacts/:name': 'showContactDetails'
    },

    onBeforeRoute: function() {
       // Init main module container
        this.container =new View({
            container: $('#wrap')});

        console.log('до ContactsScreenController');

        //
        // // Init menu
        this.menuModule = new MenuModule('menu');
        this.menuModule.showMenu(this.container.getMenuContainer(), 'authors');

    },

    onAfterRoute: function() {
      console.log('после ContactsScreenController');

    },

    showContacts: function() {
      console.log('showContacts');
    },

    showContactDetails: function(id) {
      console.log('showContactDetails');
    },

    remove: function() {
      console.log('Contacts controller cleanup -> go to another controller');
    }
  });

  var Contacts = new ContactsScreenController({router: true});
  return Contacts;
});