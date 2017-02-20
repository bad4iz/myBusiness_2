define(function(require) {
  "use strict";
  
  var Controller = require('controller'),
     View = require('./view');
  
  // Controller provides Public API for menu module
  return Controller.extend({
    /**
     *
     * @param container
     * @param active указывеет активный пункт меню
     * @param back показывает кнопку назад
     */
    showMenu: function(container, active, back) {
      this.view = new View({
        container: container,
        active: active,
        back: back
      });
    }
  });
});