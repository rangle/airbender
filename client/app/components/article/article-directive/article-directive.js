'use strict';

angular.module('airbender.components.article.article-directive', [
  'airbender.core.data.articles'
])

.directive('abArticle', function (articles) {

  var directive = {
    scope: true,
    template: '',
    transclude: true
  };

  directive.compile = function compile(tElement, tAttrs) {
    return function link(scope, iElement, iAttrs, controller, linker) {
      var slug = scope.$eval(tAttrs.abArticle);
      articles.getArticle(slug)
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