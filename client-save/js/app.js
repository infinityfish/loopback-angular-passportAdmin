                                                                    
var app = angular.module('app', [
    'ui.router',
    'lbServices',
    'ngCookies',
    'ngRoute'
  ]);

app.constant('API_URL', 'http://localhost:3000/api');

app.config(function($stateProvider, $urlRouterProvider){



	$urlRouterProvider.otherwise("/app/profile");	

	$stateProvider

        .state('app', {
          abstract: true,
          url: '/app',
          templateUrl: "views/app-main.html",
          controller: 'AppMainCtrl'
        })

		.state('app.profile', {
			url: "/profile",
			templateUrl: "views/profile.html"
		})
		.state('app.account', {
			url: "/account",
			templateUrl: "views/account.html"
		})

      	.state('app.register', {
        	url: '/register',
        	templateUrl: 'users/views/register.html',
        	controller: 'RegisterCtrl',
      	})
      	.state('app.login', {
        	url: '/login',
        	templateUrl: 'users/views/login.html',
        	controller: 'LoginCtrl',
      	});	      		
})
  .config(function(LoopBackResourceProvider,$httpProvider) {
 
   LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

    // Inside app config block
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
      return {
        responseError: function(rejection) {
          if (rejection.status === 401) {
            //Now clearing the loopback values from client browser for safe logout...
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            $location.nextAfterLogin = $location.path();
            $location.path('/login');
          }
          return $q.reject(rejection);
        }
      };
    });
 
  });




