// function doWork(data, callback){

// 	callback('done');
// }

// function doWorkPromise(data){

// 	return new Promise(function (resolve, reject) {
// 			setTimeout(function () {
// 				resolve('everything worked');
// 			},1000);
			
// 	});
// }


// doWorkPromise('some data').then(function (data) { 
// 	console.log(data);
// }, function (error){
// 	console.log(error);
// });
 	
var request = require('request');
 
function getWeather(location) {

	return new Promise(function (resolve, reject) {
			var encodedLocation = encodeURIComponent(location);
			var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation +'&units=imperial&appid=f5263f4629c89d02cc3b9f5953286319';

			if(!location){
				return reject('No location provided');
			}

			request({
			url: url,
			json: true
			}, function (error, response, body){
				if (error){
					reject('Unable to fetch weather');
				} else {

					//console.log(JSON.stringify(body, null, 4));
					resolve('Its '+body.main.temp+' in '+body.name+'!');
					//console.log('Its '+body.main.temp+' in '+body.name+'!');
				}
		});
	});
}


getWeather('San Franciso').then(function(currentWeather) {
		console.log(currentWeather);
}, function (error) {
		console.log(error);
});