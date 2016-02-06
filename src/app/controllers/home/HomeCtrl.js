'use strict';

angular.module('app.controllers', [])
  .controller( 'HomeCtrl',  function($scope, _, apiService) {

    console.log('HomeCtrl');

    apiService.sendApiRequest(apiService.buildUrl('posts.all'), 'GET').then(function(response){
      console.log(angular.toJson(response));
    });//Handle API errors in apiService

  });

