/* global angular */

angular.module('airbender-appState', ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function ($urlRouterProvider, $stateProvider, $locationProvider) {
    'use strict';

    // Skip on HTML5 mode for now
    $locationProvider.html5Mode(false);

    $urlRouterProvider
      .when('/', '/article/liber-primus')
      .otherwise('/article/liber-primus');

    $stateProvider.state('article', {
      url: '/article/{articleId}',
      views: {
        'top-level': {
          templateUrl: '/article.html',
          controller: 'ArticleCtrl'
        }
      }
    });
  }
])

.service('appState', ['$stateParams', '$state',
  function ($stateParams, $state) {
    'use strict';
    var service = {};
    service.getArticleId = function () {
      return $stateParams.articleId;
    };
    service.goToArticle = function (articleId) {
      $stateParams.articleId = articleId;
      $state.go('article');
    };
    return service;
  }
]);