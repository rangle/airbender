/* global angular */

angular.module('airbender', ['airbender-topLevelControllers',
  'airbender-topLevelDirectives', 'airbender-articleDirectives',
  'airbender-graphDirectives'
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