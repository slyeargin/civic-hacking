(function() {
  'use strict';
  $(document).ready(initialize);
  var socket;
  function initialize() {
    initializeSocketIo();
  }
  function initializeSocketIo() {
    socket = io.connect('/app');
  }
})();

//# sourceMappingURL=/Users/slyeargin/Documents/Code/javascript/itnerary/app/static/js/es6/compiled/sockets.map
