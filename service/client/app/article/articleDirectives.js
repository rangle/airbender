/* global angular, console, marked, hljs */

angular.module('airbender-articleDirectives', ['airbender-data'])

.directive('abArticle', ['data',
  function (data) {
    'use strict';
    var directive = {
      scope: true,
      template: '',
      transclude: true
    };
    directive.compile = function compile(tElement, tAttrs) {
      return function link(scope, iElement, iAttrs, controller, linker) {
        var articleId = scope.$eval(tAttrs.abArticle);
        data.getArticle(articleId)
          .then(function (article) {
            var childScope = scope.$new();
            childScope.title = article.title;
            childScope.content = article.content;
            linker(childScope, function (clone) {
              iElement.after(clone);
            });
          });
      };
    };
    return directive;
  }
])

.directive('abTitle', [

  function () {
    'use strict';
    var directive = {
      scope: true,
      template: '{{ title }}'
    };
    return directive;
  }
])

.directive('abRenderContent', ['$compile',
  function ($compile) {
    'use strict';
    var directive = {
      scope: true,
      template: ''
    };

    marked.setOptions({
      highlight: function (code) {
        console.log('Code:', code);
        var result = hljs.highlightAuto(code).value;
        console.log('Result', result);
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
  }
])

.directive('abGraph', [

  function () {
    'use strict';
    var directive = {
      scope: {},
      replace: true,
      template: '<b>Foo</b>'
    };
    return directive;
  }
]);