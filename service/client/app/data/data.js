/* global angular */

angular.module('airbender-data', [])
  .factory('data', ['$q', '$http', '$log',
    function ($q, $http, $log) {
      'use strict';
      var service = {};
      service.getArticle = function (id) {
        var deferred = $q.defer();

        $http.get('/data/de-finibis.json')
          .success(function (data) {
            var article = data[id];
            $http.get('/data/de-finibis/' + id + '.txt')
              .success(function (text) {
                article.content = text;
                deferred.resolve(data[id]);
              });
          })
          .error(function (error) {
            $log.error(error);
          });
        return deferred.promise;
      };
      return service;
    }
  ]);