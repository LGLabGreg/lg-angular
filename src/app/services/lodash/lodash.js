'use strict';
angular.module('app.services', [])
  .factory( '_',  function($window) {
    return $window._;
  });

