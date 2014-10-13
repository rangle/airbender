'use strict';

angular.module('airbender.components.article.article-directive', [
  'airbender-data'
])

.directive('abArticle', function (data) {

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
});