var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
	.option('location', {
		alias: 'l',
		demand: false,
		describe: 'Location to fetch weather for',
		type: 'string'
	})
	.help('help')
	.argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('Location was provided');
	
	weather(argv.l).then(function(currentWeather) {
		console.log(currentWeather);
	}, function(error){
		console.log('unable to fetch weather');
	});

	// weather(argv.l, function (currentWeather) {
	// 	console.log(currentWeather);
	// });
} else {
	console.log('Location was not provided');
	//using Promises
	location().then(function(location){
		return weather(location.city);
	}).then(function (message) {
		console.log(message);
	}).catch( function (error) {
		console.log(error);
	});
	
	//using callbacks
	// location(function (location) {
	// 	if (location) {
	// 		weather(location.city, function (currentWeather) {
	// 			console.log(currentWeather);
	// 		});
	// 	} else {
	// 		console.log('Unable to guess location');
	// 	}
	// });

	

}
















