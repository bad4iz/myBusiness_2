define(function(require) {
  'use strict';
  
  var Controller = require('controller'),
     ImagesView = require('./images-view'),
     Collection = require('./collection'),
     slick = require('slick');
  
  // Controller provides Public API
  return Controller.extend({
    showList: function(container) {
      this.collection = Collection;
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
    }
  });
});