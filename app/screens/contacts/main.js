define(function(require) {
  'use strict';

  var Controller = require('controller'),
      View = require('./view'),
      $ = require('jquery'),

      // Modules used in this screen
      ContactsModule = require('modules/contacts'),
      ContentsModule = require('modules/contents'),
      MenuModule = require('modules/menu'),


  ContactsScreenController = Controller.extend({
    routes: {
      'contacts': 'showContacts'
    },

    onBeforeRoute: function() {
       // Init main module container
        this.container =new View({
            container: $('#wrap')});

        console.log('до ContactsScreenController');

        //
        // // Init menu
        this.menuModule = new MenuModule('menu');
        this.menuModule.showMenu(this.container.getMenuContainer(), 'contacts');

        // Contact
        this.contactsModule = new ContactsModule();
        this.contactsModule.showList(this.container.getContactsContainer());

        // ContentsModule
        this.contentsModule = new ContentsModule();
        this.contentsModule.showList(this.container.getContentsConteiner());

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