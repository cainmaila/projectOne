var myProjects = angular.module('myProjects',[
	'ngRoute',
	'projectControllers'
]);

myProjects.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/sub',{
		templateUrl: 'storage/sub.html',
		controller: 'ListController'
	}).
	when('/projectDetails/:itemId',{
		templateUrl: 'storage/projectDetails.html',
		controller: 'DetailController'
	}).
	otherwise({
		redirectTo: '/sub'
	});
}]);