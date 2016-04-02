var viewsApp = angular.module('viewsApp', ['ngRoute']);


viewsApp.config(function($routeProvider){

	// console.log($routeProvider);
	$routeProvider.when('/',{
		templateUrl: 'pages/front.html',
		controller: 'viewsController'
	});
	$routeProvider.when('/students',{
		templateUrl: 'pages/students.html',
		controller: 'viewsController'
	});
	$routeProvider.when('/staff',{
		templateUrl: 'pages/staff.html',
		controller: 'viewsController'
	});

});


viewsApp.controller('viewsController', function($scope){
	$scope.message = 'Hello World';
});