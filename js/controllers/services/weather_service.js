define(['backbone', 'jquery'], function( Backbone, $ ){
	var WeatherService = Backbone.Model.extend({	
		baseurl: 'http://api.wunderground.com/api/',
		apikey: 'd26fb087b1455d53',
		serviceurl: 'default',
		initialize: function(){
			console.log('Init : ' + this.baseurl + '\n' + this.apikey  + '\n' + this.serviceurl);	
		},
		setServiceUrl: function( zipcode, option ){
			this.set( 'serviceurl',this.baseurl + this.apikey + '/' + option + '/q/' + zipcode + '.json' );
			console.log( 'Service Url:' + this.get('serviceurl' ));
			return this.serviceurl;
		},
		requestData: function(){
			$.ajax({
				url: this.setServiceUrl('CA/San_Francisco', 'forecast'),
				dataType: 'jsonp',
 				success: function( response ) {
					if ( 'string' === typeof response ) {
                                        	response = JSON.parse( response );
                                	}
					console.log( 'Service Response: ' + response );
					return response;	
				},
				error: function( response ) {
					console.log( 'Service Error Response: ' + response );
				}
			});
		}
	});

	return WeatherService;


}); 
