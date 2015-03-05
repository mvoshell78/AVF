// gets api creats json from api
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var pageWidth = Ti.Platform.displayCaps.platformWidth;

var createUrl = function(url){
	console.log("function", url);
	xhr.open("GET", url);
	xhr.send();
	
};

exports.createUrl = createUrl;

var remoteResponce = function(){
	var json = JSON.parse(this.responseText);
	var city = json.current_observation.display_location.city;
	var temp = parseInt(json.current_observation.temp_f) +"° ";
	var weat = json.current_observation.weather;
	var hum = json.current_observation.relative_humidity;
	var chill = json.current_observation.windchill_f + "° ";
	var dir = json.current_observation.wind_dir;
	var mph = json.current_observation.wind_mph;
	var gust = json.current_observation.wind_gust_mph;
	var icon = json.current_observation.icon_url;
	
		
	var iconView = Ti.UI.createImageView({
		image : icon,
		top : 125
	});
	var tempLabel = Ti.UI.createLabel({
	text : temp,
	font: {fontSize: 100, fontFamily: "Baskerville" },
	top : 170,
	left : (pageWidth /2) - 50
});
	var cityLabel = Ti.UI.createLabel({
	text : city,
	font: {fontSize: 35, fontFamily: "Baskerville"  },
	top: 35
});

	var weatLabel = Ti.UI.createLabel({
	text : " Currently " + weat  ,
	font: {fontSize:  25, fontFamily: "Baskerville"},
	top: 90
	
});

var humLabel = Ti.UI.createLabel({
	text : hum +" Humidity",
	font: {fontSize: 15, fontFamily: "Baskerville"  },
	top : 25
	
});

var chillLabel = Ti.UI.createLabel({
	text : "Feels like " + chill + "\n",
	font: {fontSize: 15, fontFamily: "Baskerville"  },
	to : 100
	
});

var dirLabel = Ti.UI.createLabel({
	text : "winds out of " + dir,
	font: {fontSize: 15, fontFamily: "Baskerville"  },
	top : 35
	
});

var mphLabel = Ti.UI.createLabel({
	text : mph + " Mph",
	font: {fontSize: 15, fontFamily: "Baskerville"  },
	top: 70
	
});

var gustLabel = Ti.UI.createLabel({
	text : "gusting up to " + gust + " Mph",
	font: {fontSize: 15, fontFamily: "Baskerville"  },
	top : 105
	
});

var weatherView = Ti.UI.createView({
	backgroundColor : "#7AC5CD",
	layout : "vertical",
});
var tempView = Ti.UI.createView ({
	backgroundColor : "#00B2EE",
	height : (pageHeight / 5) * 3
});

var windView = Ti.UI.createView({
	backgroundColor: "#33A1C9",
	height : pageHeight / 5
});
var chillView = Ti.UI.createView({
	backgroundColor : "#38B0DE ",
	height : pageHeight / 5
});
var win1 = Ti.UI.createWindow({
	backgroundColor :("blue"),
	
});
	chillView.add(humLabel,chillLabel);
	tempView.add(cityLabel,weatLabel,tempLabel,iconView);
	windView.add(dirLabel,mphLabel,gustLabel);
	weatherView.add(tempView, chillView, windView);
	
	win1.add(weatherView);
	win1.open();
	
	
	console.log(city, temp, weat,hum,chill,dir,mph,gust);
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




