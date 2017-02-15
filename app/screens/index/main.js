define(function(require) {
  'use strict';

  var Controller = require('controller'),
      View = require('./view'),
      $ = require('jquery'),

      // // Modules used in this screen
      ImagesModule = require('modules/images'),
      MenuModule = require('modules/menu'),
      ContentsModule = require('modules/contents'),

  IndexScreenController = Controller.extend({
    routes: {
      '': 'index',
      'index': 'index'
    },

    onBeforeRoute: function() {
        // Init main module container
        this.container =new View({container: $('#wrap')});

        // Init menu
        this.menuModule = new MenuModule();
        this.menuModule.showMenu(this.container.getMenuContainer(), 'index');

        // Image
        this.imagesModule = new ImagesModule();
        this.imagesModule.showList(this.container.getImageContainer());

        //Init getContentConteiner
        this.contentsModule = new ContentsModule();
        this.contentsModule.showList(this.container.getContentConteiner());

    },

    onAfterRoute: function() {
      console.log(' после выполнения контроллера Index ');
    },

    index: function() {

    },

    remove: function() {
      console.log('Index controller cleanup -> go to another controller');
    }
  });

  var Index = new IndexScreenController({router: true});
  return Index;
});