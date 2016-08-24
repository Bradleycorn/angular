var coreShows = angular.module('core.shows', ['ngResource']);

coreShows.factory('Shows', ['$resource', function($resource){
	return {
		server: $resource('/api/shows/:year/:showDate/:archiveId', 
			{ year: '@year', showDate: '@showDate', archiveId: '@archiveId'}, //defaults
			{ //Add additional methods here

			} 
		)
	}
}]);