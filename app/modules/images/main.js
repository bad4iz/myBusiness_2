define(function (require) {
    'use strict';

    var Controller = require('controller'),
        ImagesView = require('./images-view'),
        Collection = require('./collection'),
        _ = require('underscore'),
        slick = require('slick');

    // Controller provides Public API for image module
    return Controller.extend({
        initialize: function () {},

        showList: function (container) {
            console.log('showList: function' + container);
            this.collection = Collection;
            // console.log(this.collection);
            this.collectionView = new ImagesView({
                container: container,
                collection: this.collection
            });

            this.collectionView.render();
            $(".center").slick({
                dots: true,
                infinite: true,
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000
            });
        },

        remove: function () {
            console.log('удаление виджета картинки "Image widget"');
        }
    });
});