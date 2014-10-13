'use strict';

angular.module('airbender.core.data.articles', [
  'koast'
])

.factory('articles', function (koast, _koastLogger) {
  // Monkey-patch koast.
  if (!koast.logger) {
    koast.logger = _koastLogger;      
  }
  var logger = koast.logger.makeLogger('articles')
  var service = {};
  service.getArticle = function (slug) {
    logger.info('getArticle', slug);
    return koast.getResource('articles', {slug: slug});
  };
  return service;
});