var app = angular.module('routeDemo', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'homeController',
		templateUrl: 'home.html'
	})
	.when('/about', {
		controller: 'aboutController',
		templateUrl: 'about.html'
	})
	.otherwise({
		controller: 'errorController',
		templateUrl: '404.html'
	});
});

app.controller('appController', function($scope, $location) {
	$scope.isActive = function(path) {
		return $location.path() === path;
	};
});

// Home
app.controller('homeController', function($scope) {});

// About
app.controller('aboutController', function($scope) {});

// 404 handler
app.controller('errorController', function($scope, $location) {
	$scope.path = $location.path();
	$scope.back = function() {
		history.back();
	};
});
