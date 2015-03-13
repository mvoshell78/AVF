Ti.UI.setBackgroundColor("#E6F3F7");


//var url = "http://api.wunderground.com/api/d0597510b3186fce/conditions/q/" + lat + ","  + lng + ".json" ;
//25.39 require and export
// ends 44



var geo = require("geo");

var ifNet = function(){
if (Ti.Network.online){
	//console.log("online");
	
	geo.getGeo();
} else {
	alert("Network Failure \n Please check your connection and try again");
	//console.log("not online");
};

};

ifNet();
