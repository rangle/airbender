'use strict';

angular.module('airbender.components.user.login-widget', [
  'koast'
])

.directive('abLoginWidget', function (koast, $log) {
  'use strict';
  var directive = {
    restrict: 'E',
    replace: true,
    scope: {},
    template: '<a href="#">{{displayText}}</a>'
  };
  directive.link = function (scope, element, attrs) {
    var user = koast.user;
    user.whenStatusIsKnown()
      .then(function() {
        user = koast.user;
        $log.info('User:', user);
        if (user.isAuthenticated) {
          scope.displayText = user.data.displayName;  
        } else {
          scope.displayText = 'Login';
        }
        element.bind('click', function() {
          if (koast.user.isAuthenticated) {
            console.log('Already logged in as', koast.user);
          } else {
            koast.user.initiateOauthAuthentication('google');
          }
        });
      })
      .then(null, $log.error);
  };
  return directive;
});