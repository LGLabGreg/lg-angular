'use strict';

angular.module('app.controllers.home', [])
  .controller( 'HomeCtrl',  function($scope, _, apiService) {

    $scope.view = 'all';

    apiService.sendApiRequest(apiService.buildUrl('posts.all'), 'GET').then(function(response){
      $scope.posts = response;
      angular.element('.preloader-wrapper').removeClass('visible');
    });//Handle API errors in apiService

    $scope.readMore = function(post){
      angular.element('.preloader-wrapper').addClass('visible');
      apiService.sendApiRequest(apiService.buildUrl('posts.item', {id: post.id}), 'GET').then(function(response){
        $scope.post = response;
        $scope.view = 'detail';
        angular.element('.preloader-wrapper').removeClass('visible');
      });
    }

  });

