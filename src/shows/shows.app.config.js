var showsApp = angular.module('showsApp');

showsApp.config(['$locationProvider', '$routeProvider', 
	function config($locationProvider, $routeProvider){
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true,
			rewriteLinks: true
		});

		$routeProvider.
		when('/:year/:showDate?/:archiveId?', {
			templateUrl: 'shows/main/main.view.html',
			controller: 'MainController',
			resolve: {
				showsList: function(Shows, $route) {
					return Shows.server.query({
						year: $route.current.params.year
					}).$promise;
				},
				recordingsList: function(Shows, $route) {
					if ($route.current.params.showDate) {
						return Shows.server.query({
							year: $route.current.params.year,
							date: $route.current.params.showDate
						}).$promise;
					} else {
						return null;
					}
				}
			}
		}).
		otherwise({
			redirectTo: '/'
		});	
	}
]);