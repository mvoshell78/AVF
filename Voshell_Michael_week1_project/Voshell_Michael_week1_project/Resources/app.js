Ti.UI.setBackgroundColor("#E6F3F7");


var geo = require("geo");

var weatherapi = require("weatherapi");

if (Ti.Network.online){
	// checks to see if the there is a net work connection
	// yes runs getGeo
	geo.getGeo();
} else {
	// no alerts 
	alert("No network is detected./n Please check your connection and then refresh the app.");
	
};




