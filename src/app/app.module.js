(function() {
	'use strict';
	angular
		.module('app', [
			
			'ngRoute',
			'ngSanitize',

			//App modules
			'app.config',
			'app.services',
			'app.controllers'

			
		]);
}());






