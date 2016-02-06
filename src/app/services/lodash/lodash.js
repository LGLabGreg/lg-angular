'use strict';
angular.module('app.services.lodash', [])
  .factory( '_',  function($window) {
    console.log('lodash')
    return $window._;
  });

