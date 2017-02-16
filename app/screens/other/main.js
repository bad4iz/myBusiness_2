define(function (require) {
    'use strict';

    var Controller = require('controller'),
        View = require('./view'),
        $ = require('jquery'),
        Backbone = require('backbone'),


        // // Modules used in this screen
        MenuModule = require('modules/menu'),
        ContentsModule = require('modules/contents'),

        OtherScreenController = Controller.extend({
            routes: {
                'other': 'other'
            },

            onBeforeRoute: function () {
                // Init main module container
                this.container = new View({container: $('#wrap')});

                // Init menu
                this.menuModule = new MenuModule();
                this.menuModule.showMenu(this.container.getMenuContainer(), 'other', 'other');

                //Init Content
                this.contentsModule = new ContentsModule();
                this.contentsModule.showList(this.container.getContentConteiner());

            },

            onAfterRoute: function () {
                console.log(' после выполнения контроллера Index ');
            },

            other: function () {
                console.log('выполнения контроллера other ');

            },

            remove: function () {
                console.log('Index controller cleanup -> go to another controller');
            }
        });

    var Other = new OtherScreenController({router: true});
    return Other;
});