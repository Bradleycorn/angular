var showsApp = angular.module('showsApp');

showsApp.config(['$locationProvider', '$routeProvider', 
	function config($locationProvider, $routeProvider){
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true,
			rewriteLinks: true
		});

		$routeProvider.
		when('/', {
			template: 'Select a year to see some shows.'
		}).
		when('/:year/:showDate?', {
			templateUrl: 'shows/main/main.view.html',
			controller: 'YearController'
		}).
		otherwise({
			redirectTo: '/'
		});	
	}
]);