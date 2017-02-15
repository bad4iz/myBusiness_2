define(function (require) {
    'use strict';

    var Controller = require('controller'),
        СontentsView = require('./contents-view'),
        Collection = require('./collection'),
        _ = require('underscore'),
        slick = require('slick');

    // Controller provides Public API for image module
    return Controller.extend({
        initialize: function () {},

        showList: function (container) {
            this.collection = Collection;
            this.contentsView = new СontentsView({
                container: container,
                collection: this.collection
            });

            this.contentsView.render();

        },

        remove: function () {
            console.log('удаление виджета content "Content widget"');
        }
    });
});