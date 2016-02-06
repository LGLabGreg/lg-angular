'use strict';
angular.module('app.services', [])
  .service( 'apiService',  function($http, $q, _, $window) {

    var headers = {
      'Content-Type': 'application/json'
    }

    function sendApiRequest(endpoint, method, data){

        var deferred = $q.defer();

        $http({
            method: method,
            url: endpoint,
            headers: headers,
            data: data
        }).success(function(data, status, headers) {
            deferred.resolve(data);
        }).error(function(err) {
            console.log('Api Service error: ' + angular.toJson(err));
            deferred.reject(err);
        });

        return deferred.promise;
        
    }


    // Public methods
    return {
      sendApiRequest: sendApiRequest
    };

  });



