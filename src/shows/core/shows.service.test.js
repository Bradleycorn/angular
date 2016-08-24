describe('Shows Service', function() {
	var $httpBackend;
	var Shows;
	var yearsData = [
		{
			year: "1995",
			shows: 48
		}
	];

	var showsData = [
		{
			title: '07-08-1995',
			location: 'Red Rocks, CO',
			isSoundboard: true,
			downloads: 2463
		}
	];

	var recording = {
		archiveId: 'bradleycorn.shnf',
		isSoundboard: true,
		downloads: 100,
		rating: 4.9,
		setlist: 'Bertha, The Other One > Estimated Prophet > Eyes of the World',
		reviews: 50,
		source: 'DSBD %gt; DAT',
		title: '07-08-1995',
		location: 'Red Rocks, CO'
	};

	var recordingsData = [];
	recordingsData.push(recording);




	beforeEach(function() {
		jasmine.addCustomEqualityTester(angular.equals);
	});

	beforeEach(module('core.shows'));

	beforeEach(inject(function(_$httpBackend_, _Shows_) {
		$httpBackend = _$httpBackend_;
		Shows = _Shows_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	})

	it('should fetch a list of years from /api/shows', function() {
		$httpBackend.expectGET('/api/shows').respond(yearsData);
		var years = Shows.server.query();
		expect(years).toEqual([]);

		$httpBackend.flush();

		expect(years).toEqual(yearsData);
	});

	it('should fetch a list of shows from 1995 from /api/shows/1995', function() {
		$httpBackend.expectGET('/api/shows/1995').respond(showsData);
		var shows = Shows.server.query({year: 1995});
		expect(shows).toEqual([]);

		$httpBackend.flush();

		expect(shows).toEqual(showsData);
	});

	it('should fetch a list of recordings for a show with date 07-08-1995 from /api/shows/1995/07-08-1995', function() {
		$httpBackend.expectGET('/api/shows/1995/07-08-1995').respond(recordingsData);
		var recordings = Shows.server.query({year: 1995, showDate: '07-08-1995'});
		expect(recordings).toEqual([]);

		$httpBackend.flush();

		expect(recordings).toEqual(recordingsData);
	});

	it('should fetch an object (recording) for a show with id bradleycorn.shnf from /api/shows/1995/07-08-1995/bradleycorn.shnf', function() {
		$httpBackend.expectGET('/api/shows/1995/07-08-1995/bradleycorn.shnf').respond(recording);
		var recordingObj = Shows.server.get({year: 1995, showDate: '07-08-1995', archiveId: 'bradleycorn.shnf'});
		expect(recordingObj).toEqual({});

		$httpBackend.flush();

		expect(recordingObj).toEqual(recording);
	});


});