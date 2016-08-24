describe('Year Nav Module', function() {

	beforeEach(module('yearNav'));

	it('should create a model with 4 years', inject(function($componentController, $rootScope){
		var scope = $rootScope.$new();
		var route = { 
						current: { 
							params: {} 
						} 
					};

		var ctrl = $componentController('yearNav', {$scope: scope, $route: route});

		expect(ctrl.years.length).toBe(4);
	}));





}); //end description