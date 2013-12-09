//
//	main.js
//	---responsible for configuring require.js
//	and loading initially important dependencies  
//
//

require.config({
	paths: {
		'jquery': 'libs/jquery/jquery-2.0.3.min',
		'underscore': 'libs/underscore/underscore-min',
		'backbone': 'libs/backbone/backbone-min',
		'app_view': 'views/app',
		'weather_model': 'models/weather',
		'weather_service': 'controllers/services/weather_service'
	},
	shim: {
		
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});

require([ 'app_view' ], function(AppView){
	new AppView;
});
