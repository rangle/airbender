/* global angular, _, console */

angular.module('airbender-graphDirectives', ['nvd3ChartDirectives'])

.directive('abSeries', [

  function () {
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
        console.log('Calling scope.addSeries for', iAttrs.seriesName);
        scope.addSeries(key, values);
      });
    };
    return directive;
  }
])

.directive('abLineChart', [

  function () {
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
  }
]);