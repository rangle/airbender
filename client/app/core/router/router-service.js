'use strict';

angular.module('airbender.core.router', [
  'ui.router'
])

.config(
  function ($urlRouterProvider, $stateProvider, $locationProvider) {
    'use strict';

    // Skip on HTML5 mode for now
    $locationProvider.html5Mode(false);

    $urlRouterProvider
      .when('/', '/article/literas')
      .otherwise('/article/literas');

    $stateProvider.state('article', {
      url: '/article/{slug}',
      resolves: {
        foo: function ($stateParams) {
          console.log('Transitioning to ' + $stateParams.articleId);
        }
      },
      views: {
        'top-level': {
          templateUrl: '/article.html',
          controller: 'ArticleCtrl'
        }
      }
    });
  }
)

.service('abRouter',
  function ($stateParams, $state) {
    var service = {};
    service.getArticleSlug = function () {
      return $stateParams.slug;
    };
    service.goToArticle = function (slug) {
      $stateParams.slug = slug;
      $state.go('article');
    };
    return service;
  }
);