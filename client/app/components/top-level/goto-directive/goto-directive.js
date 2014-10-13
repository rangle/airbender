'use strict';

angular.module('airbender.components.top-level.goto-directive', [
  'airbender.core.router'
])

.directive('abGoto', function (abRouter) {
  'use strict';
  var directive = {
    restrict: 'A',
    replace: false,
    scope: {}
  };
  directive.link = function (scope, element, attrs) {
    element.bind('click', function go() {
      abRouter.goToArticle(attrs.abGoto);
    });
  };
  return directive;
});