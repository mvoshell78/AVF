Ti.UI.setBackgroundImage("#E6F3F7");




var ui = require("ui");
//ui.runUi();


var ifNet = function(){
if (Ti.Network.online){
	console.log("online");
	var cloud = require("cloud");
	cloud.loginCloud();
	
} else {
	alert("Network not available \n Forcast results may not be current");
	//console.log("not online");
/*var storage = require("storage");	
storage.readData();
storage.readData2();
	*/
};

};

ifNet();

