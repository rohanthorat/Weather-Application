var request = require('request');


module.exports = function (location) {
	
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

