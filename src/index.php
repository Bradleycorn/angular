<?php require_once('api/classes/year.inc'); ?>

<!doctype html>
<html ng-app="showsApp">
	<head>
     	<title></title>

     	<base href="/" />

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Custom Favicon -->
		<link rel="apple-touch-icon" sizes="180x180" href="/_/img/favicon/apple-touch-icon.png?v=bb2">
		<link rel="icon" type="image/png" href="/_/img/favicon/favicon-32x32.png?v=bb2" sizes="32x32">
		<link rel="icon" type="image/png" href="/_/img/favicon/favicon-16x16.png?v=bb2" sizes="16x16">
		<link rel="manifest" href="/_/img/favicon/manifest.json?v=bb2">
		<link rel="mask-icon" href="/_/img/favicon/safari-pinned-tab.svg?v=bb2" color="#5bbad5">
		<link rel="shortcut icon" href="/_/img/favicon/favicon.ico?v=bb2">
		<meta name="msapplication-config" content="/_/img/favicon/browserconfig.xml?v=bb2">
		<meta name="theme-color" content="#004e66">

		<!-- LOAD FONTS -->
		<!-- build:js(src) /_/lib/webfontloader.min.js -->
		<script src="/_/bower/webfontloader/webfontloader.js"></script>
		<!-- endbuild -->
		<script>
		  WebFont.load({
		    google: {
		    	families: ['Roboto Slab:300,400,700','Roboto:300,400,500,700,900']
		    }
		  });
		</script>

		<!-- build:css(src) /_/lib/libs.min.css -->
		<link rel="stylesheet" href="/_/bower/tether/dist/css/tether.min.css">
		<link rel="stylesheet" href="/_/bower/tether/dist/css/tether-theme-basic.min.css">
		<link rel="stylesheet" href="/_/bower/bootstrap/dist/css/bootstrap.min.css">
		<link rel="stylesheet" href="/_/bower/fontawesome/css/font-awesome.min.css">
		<!-- endbuild -->

		<!-- build:css(src) /_/css/styles.css -->
		<link rel="stylesheet" href="/_/css/styles.css" />
		<!-- endbuild -->
	</head>
	<body>
		<div class="container">
			<header id="TopNav">
				<year-nav></year-nav>
			</header>

			<main ng-view>
			</main>

		</div>


		<!-- build:js(src) /_/lib/bootstrap.min.js -->
		<script src="/_/bower/jquery/dist/jquery.js"></script>
		<script src="/_/bower/tether/dist/js/tether.js"></script>
		<script src="/_/bower/bootstrap/dist/js/bootstrap.js"></script>
		<!-- endbuild -->
	
		<!-- build:js(src) /_/lib/angular.min.js -->
		<script src="/_/bower/angular/angular.js"></script>
		<script src="/_/bower/angular-route/angular-route.js"></script>
		<script src="/_/bower/angular-resource/angular-resource.js"></script>
		<!-- endbuild -->

		<!-- build.js(src) /_/shows-app.min.js -->
		<script src="/shows/main/main.module.js"></script>
		<script src="/shows/main/main.controller.js"></script>
		<script src="/shows/year-nav/year-nav.module.js"></script>
		<script src="/shows/year-nav/year-nav.component.js"></script>
		<script src="/shows/shows-list/shows-list.module.js"></script>
		<script src="/shows/shows-list/shows-list.component.js"></script>		
		<script src="/shows/core/shows.service.js"></script>
		<script src="/shows/shows.app.js"></script>
		<script src="/shows/shows.app.config.js"></script>
		<!-- endbuild -->
	</body>
</html>

