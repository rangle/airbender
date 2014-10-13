/* global angular */

angular.module('airbender', [
  'airbender.components.article',
  'airbender.components.graphs',
  'airbender.components.top-level'
])

// The main airbender service exposed to the developer.
.factory('airbender', ['$q',
  function ($q) {
    'use strict';
    var service = {};
    var optionsDeferred = $q.defer();
    service.init = function (options) {
      optionsDeferred.resolve(options);
    };
    service.getOptions = function () {
      return optionsDeferred.promise;
    };
    return service;
  }
]);