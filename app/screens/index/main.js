define(function(require) {
  'use strict';

  var Controller = require('controller'),
      View = require('./view'),
      $ = require('jquery'),
      // Mem = require('mem'),

      // // Modules used in this screen
      ImagesModule = require('modules/images'),
      MenuModule = require('modules/menu'),
      // CommentsModule = require('modules/comments'),

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
        this.menuModule.showMenu(this.container.getMenuContainer(), 'authors');

        // Image
        this.imagesModule = new ImagesModule();
        this.imagesModule.showList(this.container.getImageContainer());
        var r = this.container.getImageContainer();

        //Init comments
        // this.textsModule = Mem.set('comments', getTextConteiner);
    },

    onAfterRoute: function() {
      console.log(this.conteiner + ' после выполнения контроллера Index ');
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