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
         'contacts': 'showContacts',
           'contacts/:id': 'showContactsId'
       },
       
       onBeforeRoute: function() {
         // Init main module container
         this.container = new View({
           container: $('#wrap')
         });
         
         // Init menu
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
       },
       
       showContacts: function() {
         console.info('показ страницы контактов');
       },
       remove: function() {
         this.menuModule.remove();
         this.contactsModule.remove();
         this.contentsModule.remove();
         this.container.remove();
         console.info('удаление модулей страницы контактов');
       }
     });
  
  var Contacts = new ContactsScreenController({router: true});
  return Contacts;
});