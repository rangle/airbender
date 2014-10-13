'use strict';

angular.module('airbender.components.top-level.init-directive', [])

.directive('abInit', function (airbender, abRouter) {
  var directive = {
    restrict: 'A'
  };
  directive.scope = true;
  directive.link = function (scope, iElement, iAttrs) {
    scope.siteTitle = iAttrs.abSetSiteTitle;
    scope.getCurrentArticleId = function () {
      return abRouter.getArticleId();
    };
  };
  return directive;
});