// function doWork (shouldFail) {

// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function (){
// 			if (typeof shouldFail === 'boolean' && shouldFail === true) {
// 				reject('error message');
// 			} else {
// 				resolve('success');
// 			}
// 		},1000);
// 	});
// }

// doWork(true).then(function (message) {
// 	console.log(message);
// 	return doWork(true);
// }).then(function (message) {
// 	console.log(message);
// }).catch(function (error) {
// 	console.log(error);
// });


function getLocation () {
	return new Promise(function (resolve, reject) {
		resolve('Philadelphia');
	});
}

function getWeather (location) {
	return new Promise(function (resolve, reject) {
		resolve('Its 78 in '+ location);
	});
}

getLocation().then(function (location) {
	return getWeather(location);
}).then(function (message) {
	console.log(message);
}).catch(function (error) {
	console.log(error);
});

