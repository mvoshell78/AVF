Ti.UI.setBackgroundColor("blue");


//var url = "http://api.wunderground.com/api/d0597510b3186fce/conditions/q/" + lat + ","  + lng + ".json" ;
//25.39 require and export
// ends 44



var geo = require("geo");

var weatherapi = require("weatherapi");

if (Ti.Network.online){
	//console.log("online");
	
	geo.getGeo();
} else {
	//console.log("not online");
};



