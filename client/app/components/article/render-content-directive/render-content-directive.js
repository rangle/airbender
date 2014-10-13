'use strict';

angular.module('airbender.components.article.render-content-directive', [])

.directive('abRenderContent', function ($compile) {
  var directive = {
    scope: true,
    template: ''
  };

  marked.setOptions({
    highlight: function (code) {
      // console.log('Code:', code);
      var result = hljs.highlightAuto(code).value;
      // console.log('Result', result);
      return result;
    }
  });

  directive.link = function (scope, element) {
    marked(scope.content, function (err, html) {
      if (err) {
        console.error(err);
      }
      var compiled = $compile('<div>' + html + '</div>')(scope.$new());
      element.html(compiled);
    });
  };
  return directive;
});