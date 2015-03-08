// geo 48

var getGeo = function(){
	console.log("Geo is working!");
	Ti.Geolocation.purpose = "Weather would like to use your Geolocation"; // asks if its ok to use your location
	Ti.Geolocation.getCurrentPosition(function(e){
	// gets current position
		if (Ti.Platform.osname === "android") {
			console.log("These aren't the droids your looking for");
			var lat = 39.1;// static var for emulator
			var lng = -75.4;
			console.log(lat,lng);
			var url = "http://api.wunderground.com/api/d0597510b3186fce/conditions/q/" + lat + ","  + lng + ".json";
			// concats url with var lat and long 
			console.log(url);
			// requires weatherapi to export function results
			var weatherapi = require("weatherapi");
				//takes the var url and passes it to the function createUrl in weatherapi.js
				weatherapi.createUrl(url);
			
		} else {
			console.log("An apple a day, keeps the doctor away!");
			
			var lat = e.coords.latitude;
			var lng = e.coords.longitude;
			// e is the var for the getGeo function 
			//coords.lat/lng is the property
			console.log("apple",lat,lng);
			var url = "http://api.wunderground.com/api/d0597510b3186fce/conditions/q/" + lat + ","  + lng + ".json";
			// concats url and var lat and lng 
			console.log(url);
			var weatherapi = require("weatherapi");
			// requires weatherapi to export function results
				weatherapi.createUrl(url);
			//takes the var url and passes it to the function createUrl in weatherapi.js
		}
	});
	
};



exports.getGeo = getGeo;

