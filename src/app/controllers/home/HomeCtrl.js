'use strict';

angular.module('app.controllers', [])
  .controller( 'HomeCtrl',  function($scope, _, apiService) {

    $scope.view = 'all';

    apiService.sendApiRequest(apiService.buildUrl('posts.all'), 'GET').then(function(response){
      $scope.posts = response;
    });//Handle API errors in apiService

    $scope.readMore = function(post){
      apiService.sendApiRequest(apiService.buildUrl('posts.item', {id: post.id}), 'GET').then(function(response){
        $scope.post = response;
        $scope.view = 'detail';
      });
    }

  });

