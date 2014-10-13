'use strict';

angular.module('airbender', [
  'airbender.components.article',
  'airbender.components.graphs',
  'airbender.components.top-level',
  'koast'
])

// The main airbender service exposed to the developer.
.factory('airbender',
  function (koast) {
    var service = {};
    var serverUrl = 'http://localhost:9000';

    service.init = function (options) {

      koast.init({
        baseUrl: serverUrl
      });

      // Koast server, expecting results with an envelope.
      koast.setApiUriPrefix('/api/v1/');
      koast.addEndpoint('articles', ':slug', {useEnvelope: true});
    };

    return service;
  }
);