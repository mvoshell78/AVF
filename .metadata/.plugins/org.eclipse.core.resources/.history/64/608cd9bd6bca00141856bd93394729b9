// geo 48

var getGeo = function(){
	console.log("Geo is working!");
	Ti.Geolocation.purpose = "Weather would like to use your Geolocation";
	Ti.Geolocation.getCurrentPosition(function(e){
		//console.log(e);
		if (Ti.Platform.osname === "android") {
			console.log("These aren't the droids your looking for");
			var lat = 39.1;
			var lng = -75.4;
			//console.log(lat,lng);
			var url = "http://api.wunderground.com/api/d0597510b3186fce/conditions/q/" + lat + ","  + lng + ".json";
			//console.log(url);
			var weatherapi = require("weatherapi");
				weatherapi.createUrl(url);
			
		} else {
			console.log("An apple a day, keeps the doctor away!");
			
			var lat = e.coords.latitude;
			var lng = e.coords.longitude;
			//console.log("apple",lat,lng);
			var url = "http://api.wunderground.com/api/d0597510b3186fce/conditions/q/" + lat + ","  + lng + ".json";
			var url2 = "http://api.wunderground.com/api/d0597510b3186fce/forecast/q/" + lat + ","  + lng + ".json";
			//console.log(url);
			var weatherapi = require("weatherapi");
				weatherapi.createUrl(url,url2);
				//weatherapi.createUrl2(url2);
			
		}
	});
	
};



exports.getGeo = getGeo;

