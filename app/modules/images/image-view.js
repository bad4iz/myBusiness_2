define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        template = require('text!./templates/image.html'),
        $ = require('jquery'),
        _ = require('underscore');

    return Backbone.View.extend({
        className: 'image-item',

        initialize: function(options) {
            options = options || {};
            if (options.isDetails) {
                this.template = _.template(detailsTemplate);
            } else {
                this.template = _.template(template);
            }

            if (options.container) {
                this.container = options.container;
            }
        },

        render: function() {
            this.$el.html(this.template({model: this.model.toJSON()}));
            if (this.container) {
                this.container.html(this.$el);
            }
            return this;
        },

        remove: function() {
            console.log('remove book details');
            Backbone.View.prototype.remove.apply(this);
        }
    });
});