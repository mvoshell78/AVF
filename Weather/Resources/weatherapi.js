// gets api creats json from api
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var pageWidth = Ti.Platform.displayCaps.platformWidth;

var createUrl = function(url,url2){
	console.log("function1", url);
	xhr.open("GET", url);
	xhr2.open("GET", url2);
	xhr.send();	
	xhr2.send();
};



exports.createUrl = createUrl;


var remoteResponce = function(){
	var json = JSON.parse(this.responseText);
	var weather = {
	 city : json.current_observation.display_location.city,
	 temp : parseInt(json.current_observation.temp_f) +"° ",
	 weat : json.current_observation.weather,
	 hum : json.current_observation.relative_humidity,
	 chill : json.current_observation.windchill_f + "° ",
	 dir : json.current_observation.wind_dir,
	 mph : json.current_observation.wind_mph,
	 gust : json.current_observation.wind_gust_mph,
	 icon : json.current_observation.icon_url};
	
	
	console.log(weather);
	
	var ui = require("ui");
	ui.runUi(weather);
};
	
var remoteResponce2 = function(){
	var json = JSON.parse(this.responseText);
	var weather2 = {
	 
	title0 : json.forecast.txt_forecast.forecastday[0].title,
	conditions0 : json.forecast.txt_forecast.forecastday[0].fcttext,
	icon0 : json.forecast.txt_forecast.forecastday[0].icon_url,
	title1 : json.forecast.txt_forecast.forecastday[1].title,
	conditions1 : json.forecast.txt_forecast.forecastday[1].fcttext,
	icon1 : json.forecast.txt_forecast.forecastday[1].icon_url,
	title2 : json.forecast.txt_forecast.forecastday[2].title,
	conditions2 : json.forecast.txt_forecast.forecastday[2].fcttext,
	icon2 : json.forecast.txt_forecast.forecastday[2].icon_url,
	title3 : json.forecast.txt_forecast.forecastday[3].title,
	conditions3 : json.forecast.txt_forecast.forecastday[3].fcttext,
	icon3 : json.forecast.txt_forecast.forecastday[3].icon_url,
	title4 : json.forecast.txt_forecast.forecastday[4].title,
	conditions4 : json.forecast.txt_forecast.forecastday[4].fcttext,
	icon4 : json.forecast.txt_forecast.forecastday[4].icon_url};
	
	console.log(weather2);
	
	/*var app = require("app");
	app.runUi(weather2);*/
};	

	

// error for xhr 
var remoteError = function(e){
	Ti.API.debug(status = this.status);
	Ti.API.debug(text = this.responceText);
	Ti.API.debug(error= e.error);
};

// xhr looks for api
var xhr = Ti.Network.createHTTPClient({
	onload :  remoteResponce, 
	onError: remoteError, 
	timeout : 5000
	
});

var xhr2 = Ti.Network.createHTTPClient({
	onload :  remoteResponce2, 
	onError: remoteError, 
	timeout : 5000
	
});


exports.remoteResponce = remoteResponce;