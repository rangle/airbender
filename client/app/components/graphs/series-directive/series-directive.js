'use strict';

angular.module('airbender.components.graphs.series-directive', [
  'nvd3ChartDirectives'
])

.directive('abSeries', function () {
  'use strict';
  var directive = {
    scope: true,
    replace: true,
    transclude: true,
    template: '<div style="display:none"/>'
  };
  directive.link = function (scope, iElement, iAttrs, controller, linker) {
    linker(scope.$new(), function (clone) {
      var text;
      var key;
      var values;

      iElement.hide();

      if (!scope.addSeries) {
        return;
      }

      text = clone[0].firstChild.textContent.trim();
      values = _.map(text.split('\n'), function (line) {
        return _.map(line.split(','), function (part) {
          return parseFloat(part.trim());
        });
      });
      key = iAttrs.seriesName;
      // console.log('Calling scope.addSeries for', iAttrs.seriesName);
      scope.addSeries(key, values);
    });
  };
  return directive;
});
