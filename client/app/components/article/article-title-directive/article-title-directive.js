'use strict';

angular.module('airbender.components.article.article-title-directive', [
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