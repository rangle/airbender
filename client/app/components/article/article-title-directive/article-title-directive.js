'use strict';

angular.module('airbender.components.article.article-title-directive', [
  'airbender-data'
])

.directive('abArticleTitle',
  function () {
    var directive = {
      scope: true,
      template: '{{ title }}'
    };
    return directive;
  }
);