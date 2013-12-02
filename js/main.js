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
		'backbone': 'libs/backbone/backbone-min'
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

require([ 'views/app' ], function(AppView){
	new AppView;
});
