




var runUi = function(weather){
	//console.log("ui", weather);
	
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
		height :200,
		top : 15
	});	
	var square = Ti.UI.createImageView({
		image : '/images/square.png',
		height : 175,
		width : 500,
		top : 10
	});
	var iconView = Ti.UI.createImageView({
		image : "",
		//top : 200,
		height : 100
	});
	var tempLabel = Ti.UI.createLabel({
	text : "  °",
	font: {fontSize: 125, fontFamily: "Baskerville" },
	left : 45
});
	var cityLabel = Ti.UI.createLabel({
	text : "City",
	font: {fontSize: 35, fontFamily: "Baskerville"  },
	top: 25
});
	var weatLabel = Ti.UI.createLabel({
	text : "Conditions",
	font: {fontSize:  50, fontFamily: "Baskerville"},
	top: 15
	
});

var humLabel = Ti.UI.createLabel({
	text : "Humidity",
	font: {fontSize: 25, fontFamily: "Baskerville"  },
	top : 20,
	left : 20
	
});
var chillLabel = Ti.UI.createLabel({
	text : "Wind Chill",
	font: {fontSize: 25, fontFamily: "Baskerville"  },
	top : 70,
	left : 20
	
});
var dirLabel = Ti.UI.createLabel({
	text : "Winds out of ",
	font: {fontSize: 25, fontFamily: "Baskerville"  },
	top : 120,
	left : 20
	
});
var mphLabel = Ti.UI.createLabel({
	text : "Wind Speed",
	font: {fontSize: 25, fontFamily: "Baskerville"  },
	top: 20,
	right : 20
	
});
var gustLabel = Ti.UI.createLabel({
	text : "Gust",
	font: {fontSize: 25, fontFamily: "Baskerville"  },
	top : 70,
	right: 20
	
});

var time = Ti.UI.createLabel({
	text : "last updated",
	font : {fontSize : 10},
	top : 15
});
	var threeDayView = Ti.UI.createScrollView({
		backgroundColor : ("#32B3DE"),
		layout: "vertical",
		borderWidth : 1,
		showVerticalScrollIndicator: true
		
		
	});
	var threeDayTitle = Ti.UI.createLabel({
		text : "Day",
		left : 30,
		font : {fontSize : 18 , fontWeight : "bold" }
	});
	var threeDayConditions = Ti.UI.createLabel({
		text : "Conditions",
		left : 30
	});
	var threeDayIcon = Ti.UI.createImageView({
		image : "weather2.icon0",
		left : 30
	});

	var threeDayTitle1 = Ti.UI.createLabel({
		text : "Day",
		left :30,
		font : {fontSize : 18 , fontWeight : "bold" }
	});
	var threeDayConditions1 = Ti.UI.createLabel({
		text : "Conditions",
		left : 30
	});
	var threeDayIcon1 = Ti.UI.createImageView({
		image : "weather2.icon0",
		left : 30
	});

	var threeDayTitle2 = Ti.UI.createLabel({
		text : "Day",
		left : 30,
		font : {fontSize : 18 , fontWeight : "bold" }
	});
	var threeDayConditions2 = Ti.UI.createLabel({
		text : "Conditions",
		left : 30
	});
	var threeDayIcon2 = Ti.UI.createImageView({
		image : "weather2.icon0",
		left : 30
	});

	var threeDayTitle3 = Ti.UI.createLabel({
		text : "Day",
		left : 30,
		font : {fontSize : 18 , fontWeight : "bold" }
	});
	var threeDayConditions3 = Ti.UI.createLabel({
		text : "Conditions",
		left : 30
	});
	var threeDayIcon3 = Ti.UI.createImageView({
		image : "weather2.icon0",
		left : 30
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
	win1.add(time);
	
	win1.add(threeDayView);
	threeDayView.add(threeDayTitle);
	threeDayView.add(threeDayConditions);
	threeDayView.add(threeDayIcon);	
	
	threeDayView.add(threeDayTitle1);
	threeDayView.add(threeDayConditions1);
	threeDayView.add(threeDayIcon1);
		
	threeDayView.add(threeDayTitle2);
	threeDayView.add(threeDayConditions2);
	threeDayView.add(threeDayIcon2);	
	
	threeDayView.add(threeDayTitle3);
	threeDayView.add(threeDayConditions3);
	threeDayView.add(threeDayIcon3);	
	
	square.add(dirLabel);
	square.add(mphLabel);
	square.add(gustLabel);
	square.add(humLabel);
	square.add(chillLabel);
	
	
	
	
	win1.open();	
	
var changeTxt  = function(weather){
	time.text = weather.time;
	tempLabel.text = weather.temp;
	weatLabel.text = weather.weat;
	cityLabel.text = weather.city;
	iconView.image = weather.icon;
	dirLabel.text = "Winds out of the " + weather.dir;
	mphLabel.text = weather.mph + " Mph";
	gustLabel.text = "Gusts up to " + weather.gust;
	humLabel.text = weather.hum + ' Humidity';
	chillLabel.text = "Wind chill " + weather.chill;
	
	
	
};

var changeTxt2 = function(weather2){
	
threeDayTitle.text = weather2.title0;
threeDayConditions.text = weather2.conditions0;
threeDayIcon.image = weather2.icon0;

threeDayTitle1.text = weather2.title1;
threeDayConditions1.text = weather2.conditions1;
threeDayIcon1.image = weather2.icon1;

threeDayTitle2.text = weather2.title2;
threeDayConditions2.text = weather2.conditions2;
threeDayIcon2.image = weather2.icon2;

threeDayTitle3.text = weather2.title3;
threeDayConditions3.text = weather2.conditions3;
threeDayIcon3.image = weather2.icon3;

};	
exports.changeTxt2 = changeTxt2;
exports.changeTxt = changeTxt;
	
	
};
};


var storage = require("storage");


//exports.changeTxt = changeTxt;
exports.runUi = runUi;