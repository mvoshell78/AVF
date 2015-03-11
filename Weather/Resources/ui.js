var runUi = function(weather){
	console.log("ui", weather);
if (Ti.Platform.osname === "android") {
		

	var iconView = Ti.UI.createImageView({
		image : weather.icon,
		top : 125,
		height : 75
	});
	var tempLabel = Ti.UI.createLabel({
	text : temp,
	font: {fontSize: 100, fontFamily: "Roboto-Thin" },
	color : "black"
	
	
});
	var cityLabel = Ti.UI.createLabel({
	text : weather.city,
	font: {fontSize: 35, fontFamily: "Roboto-Thin"  },
	top: 35,
	color : "black"
});
	var weatLabel = Ti.UI.createLabel({
	text : " Currently " + weather.weat  ,
	font: {fontSize:  20, fontFamily: "Roboto-Thin"},
	top: 90,
	color : "black"
	
});
	var humLabel = Ti.UI.createLabel({
	text : weather.hum +" Humidity",
	font: {fontSize: 20, fontFamily: "Roboto-Thin"  },
	bottom : 110,
	right : 20,
	color : "black"
	
});
	var chillLabel = Ti.UI.createLabel({
	text : "Feels like " + weather.chill ,
	font: {fontSize: 20, fontFamily: "Roboto-Thin"  },
	bottom : 80,
	right : 20,
	color : "black"
	
});
	var dirLabel = Ti.UI.createLabel({
	text : "Winds out of " + weather.dir,
	font: {fontSize: 20, fontFamily: "Roboto-Thin"  },
	bottom : 110,
	left : 20,
	color : "black"
	
});
	var mphLabel = Ti.UI.createLabel({
	text : weather.mph + " Mph",
	font: {fontSize: 20, fontFamily: "Roboto-Thin"  },
	bottom: 80,
	left : 20,
	color : "black"
	
});
	var gustLabel = Ti.UI.createLabel({
	text : "Gusting up to " + weather.gust + " Mph",
	font: {fontSize: 20, fontFamily: "Roboto-Thin"  },
	bottom : 50,
	left : 20,
	color : "black"
	
});


	var weatherView = Ti.UI.createView({
	backgroundColor : "#7AC5CD",
	layout : "vertical"
});
	var tempView = Ti.UI.createView ({
	backgroundColor : "#E6F3F7",
	
});



var win1 = Ti.UI.createWindow({
	backgroundColor :("#E6F3F7"),
	
});
	//circle.add(tempLabel);
	tempView.add(tempLabel);
	//tempView.add(square);
	tempView.add(weatLabel);
	tempView.add(cityLabel);
	tempView.add(iconView);
	
	
	tempView.add(dirLabel);
	tempView.add(mphLabel);
	tempView.add(gustLabel);
	tempView.add(humLabel);
	tempView.add(chillLabel);
	
	weatherView.add(tempView);
	
	win1.add(weatherView);
	win1.open();	
	
	

} else {
	
	var circle = Ti.UI.createImageView({
	
		image : '/images/circle.png',
		height :250,
		top : 20
	});	
	var square = Ti.UI.createImageView({
		image : '/images/square.png',
		height : 200,
		width : 500,
		top : 20
	});
	var iconView = Ti.UI.createImageView({
		image : weather.icon,
		//top : 200,
		height : 100
	});
	var tempLabel = Ti.UI.createLabel({
	text : weather.temp,
	font: {fontSize: 125, fontFamily: "Baskerville" },
	left : 45
});
	var cityLabel = Ti.UI.createLabel({
	text : weather.city,
	font: {fontSize: 35, fontFamily: "Baskerville"  },
	top: 35
});
	var weatLabel = Ti.UI.createLabel({
	text : " Currently " + weather.weat  ,
	font: {fontSize:  50, fontFamily: "Baskerville"},
	top: 20
	
});

var humLabel = Ti.UI.createLabel({
	text : weather.hum +" Humidity",
	font: {fontSize: 25, fontFamily: "Baskerville"  },
	top : 20,
	left : 20
	
});
var chillLabel = Ti.UI.createLabel({
	text : "Feels like " + weather.chill + "\n",
	font: {fontSize: 25, fontFamily: "Baskerville"  },
	top : 70,
	left : 20
	
});
var dirLabel = Ti.UI.createLabel({
	text : "Winds out of " + weather.dir,
	font: {fontSize: 25, fontFamily: "Baskerville"  },
	top : 120,
	left : 20
	
});
var mphLabel = Ti.UI.createLabel({
	text : weather.mph + " Mph",
	font: {fontSize: 25, fontFamily: "Baskerville"  },
	top: 20,
	right : 20
	
});
var gustLabel = Ti.UI.createLabel({
	text : "Gusting up to " + weather.gust + " Mph",
	font: {fontSize: 25, fontFamily: "Baskerville"  },
	top : 70,
	right: 20
	
});




var win1 = Ti.UI.createWindow({
	backgroundColor :("#00B2EE"),
	layout: "vertical"
	
});

	
	circle.add(tempLabel);
	win1.add(cityLabel);
	win1.add(weatLabel);
	win1.add(iconView);
	win1.add(circle);
	win1.add(square);
	
	square.add(dirLabel);
	square.add(mphLabel);
	square.add(gustLabel);
	square.add(humLabel);
	square.add(chillLabel);
	
	
	
	
	win1.open();	
	
};
};

var weatherapi = require("weatherapi");
exports.runUi = runUi;