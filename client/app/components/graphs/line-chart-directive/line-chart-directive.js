'use strict';

angular.module('airbender.components.graphs.line-chart-directive', [
  'nvd3ChartDirectives'
])

.directive('abLineChart', function () {
  'use strict';
  var directive = {
    scope: true,
    replace: true,
    transclude: true,
    template: '<div ng-transclude/>'
  };
  directive.compile = function (tElement, tAttrs) {
    return function (scope, iElement, iAttrs, controller, linker) {
      console.log('abLineChart.link', arguments, iAttrs);
      var childScope = scope.$new();
      scope.data = [];
      scope.addSeries = function (key, values) {
        scope.data.push({
          key: key,
          values: values
        });
      };
      iElement.children().remove();
      linker(childScope, function (clone) {
        iElement.append(clone);
      });
    };
  };
  return directive;
});