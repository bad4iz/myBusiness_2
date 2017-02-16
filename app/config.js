requirejs.config({
  baseUrl: 'app/',
  urlArgs: 'bust=' +  Date.now(),
  paths: {
    jquery: 'assets/js/jquery-1.8.3',
    text: 'assets/js/require-text-2.0.10',
    underscore: 'assets/js/underscore',
    backbone: 'assets/js/backbone',
    controller: 'assets/js/backbone.controller',
    mem: 'assets/js/mem',
    slick: 'assets/slick/slick'
  },

  config: {
    app: {
      serverMocks: true
    }
  },

  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    controller: {
      deps: ['underscore', 'backbone']
    }
  },

  packages: [
    'screens/index',
    'screens/contacts',
    'screens/other',

    'modules/menu',
    'modules/images',
    'modules/contents',
    'modules/contacts',
    'modules/router'
  ]
});

requirejs(['screens/index', 'screens/contacts', 'screens/other'], function() {

  Backbone.history.start();

});
