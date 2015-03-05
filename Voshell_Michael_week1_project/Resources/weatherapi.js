// gets api creats json from api

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

	
	var tempLabel = Ti.UI.createLabel({
	text : temp,
	font: {fontSize: 75, fontFamily: "Baskerville", fontStyle: "italic"  }
});

	var weatLabel = Ti.UI.createLabel({
	text : weat + " Currently\n",
	font: {fontSize: 25, fontFamily: "Baskerville", fontStyle: "italic"  },
	top:50
});

var humLabel = Ti.UI.createLabel({
	text : hum +" Humidity",
	font: {fontSize: 25, fontFamily: "Baskerville", fontStyle: "italic"  },
	
});

var chillLabel = Ti.UI.createLabel({
	text : "Feels like " + chill + "\n",
	font: {fontSize: 25, fontFamily: "Baskerville", fontStyle: "italic"  },
	
});

var dirLabel = Ti.UI.createLabel({
	text : "winds out of " + dir,
	font: {fontSize: 25, fontFamily: "Baskerville", fontStyle: "italic"  },
	
});

var mphLabel = Ti.UI.createLabel({
	text : mph + " Mph",
	font: {fontSize: 25, fontFamily: "Baskerville", fontStyle: "italic"  },
	
});

var gustLabel = Ti.UI.createLabel({
	text : "gusting up to " + gust + " Mph",
	font: {fontSize: 25, fontFamily: "Baskerville", fontStyle: "italic"  },
	
});

var weatherView = Ti.UI.createScrollView({
	backgroundColor : "#71A1D0",
	layout : "vertical",
	width :300,
	height : 400,
	borderRadius : 10
	
	
	
});
var win1 = Ti.UI.createWindow({
	backgroundColor :("blue"),
	
});
	
	weatherView.add(weatLabel,tempLabel,humLabel,chillLabel,dirLabel,mphLabel,gustLabel);
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




