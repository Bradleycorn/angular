var coreShows = angular.module('core.shows', ['ngResource']);

coreShows.config(['$resourceProvider', function($resourceProvider) {
	$resourceProvider.defaults.stripTrailingSlashes = false;
}]);

coreShows.factory('Shows', ['$resource', function($resource){
	return {
		server: $resource('/api/shows/:year/:date/:archiveId/', 
			{ year: '@year', date: '@date', archiveId: '@archiveId'}, //defaults
			{ //Add additional methods here

			} 
		)
	}
}]);