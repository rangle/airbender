/* global angular */

angular.module('airbender-topLevelDirectives', [])

.directive('abInit', ['airbender', 'appState',
  function (airbender, appState) {
    'use strict';
    var directive = {
      restrict: 'A'
    };
    directive.scope = true;
    directive.link = function (scope, iElement, iAttrs) {
      scope.siteTitle = iAttrs.abSetSiteTitle;
      scope.getCurrentArticleId = function () {
        return appState.getArticleId();
      };
    };
    return directive;
  }
])

.directive('abLink', ['appState',
  function (appState) {
    'use strict';
    var directive = {
      restrict: 'A',
      transclude: true,
      replace: false,
      scope: {},
      template: '<a ng-click="transition()" title="{{ destination }}" href="#">{{ label }}</a>'
    };
    directive.link = function (scope, element, attrs) {
      scope.transition = function () {
        appState.goToArticle(attrs.destination);
      };
      scope.label = attrs.label;
      scope.destination = attrs.destination;
    };
    return directive;
  }
]);