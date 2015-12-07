
  angular
    .module('app')
    .controller('LoginCtrl', function ($scope, $routeParams, $location,  User, API_URL) {

      var TWO_WEEKS = 1000 * 60 * 60 * 24 * 7 * 2;

      $scope.user = {
        email: 'admin@admin.com',
        password: 'admin',
        ttl: TWO_WEEKS,
        rememberMe: true
      };

      // $scope.user = {
      //   email: 'admin@admin.com',
      //   password: 'admin'
      // };

      $scope.login = function(email, password, rememberMe) {
        User.login($scope.user, function() {
          var next = $location.nextAfterLogin || '/';
          $location.nextAfterLogin = null;
          $location.path(next);
        });
      };


});
