define([ 'backbone', 'weather_service' ], function( Backbone, WeatherService ) {
        var Weather = Backbone.Model.extend({
		initialize: function(){
			var weatherService = new WeatherService();
			this.set('data', weatherService.requestData());
			console.log('Weather Model: ' + this);
		}
        });

	return Weather;

        
});
