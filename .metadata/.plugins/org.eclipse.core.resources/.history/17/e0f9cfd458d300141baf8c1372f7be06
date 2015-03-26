Ti.UI.setBackgroundImage("#E6F3F7");




var ui = require("ui");
//ui.runUi();


var ifNet = function(){
if (Ti.Network.online){
	console.log("online");
	var cloud = require("cloud");
	cloud.loginCloud();
	
} else {
	alert("Network not available \n Loading last displayed recipie");
	console.log("not online");
var storage = require("storage");	
storage.readData();

	
};

};

ifNet();


