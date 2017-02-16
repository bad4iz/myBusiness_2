define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        template = require('text!./templates/menu.html'),
        otherTemplate = require('text!./templates/otherTemplate.html'),
        _ = require('underscore');

    return Backbone.View.extend({
        template: _.template(template),

        initialize: function (options) {
            this.container = options.container;
            this.active = options.active;
            if (options.other) {
                this.template = _.template(otherTemplate);
            } else {
                this.template = _.template(template);
            }

            this.render();
        },

        events: {
            'click .back': 'back'
        },

        render: function () {
            this.$el.html(this.template({active: this.active}));
            this.container.html(this.$el);
            return this;
        },

        getMenuContainer: function () {
            return this.$('.menu');
        },
        back: function () {
            Backbone.history.history.back();
        }
    });

});