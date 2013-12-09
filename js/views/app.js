define([ 'backbone', 'weather_model' ], function( Backbone, Weather ) {
	var App = Backbone.View.extend({
		initialize: function() {
			console.log('Bad ass stuff');
			var weather = new Weather();
			console.log('Weather in View: ' + weather);
		}
	});

	return App;
});
