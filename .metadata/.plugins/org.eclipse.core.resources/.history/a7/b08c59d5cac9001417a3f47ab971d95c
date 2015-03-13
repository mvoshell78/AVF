Ti.UI.setBackgroundColor("#E6F3F7");


var geo = require("geo");
var ui = require("ui");
var storage = require("storage");
ui.runUi();
var ifNet = function(){
if (Ti.Network.online){
	//console.log("online");
	
	geo.getGeo();
} else {
	alert("Network not available \n Please check your connection and try again");
	//console.log("not online");
	
readData();
	
};

};

ifNet();
