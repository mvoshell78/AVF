Ti.UI.setBackgroundColor("#E6F3F7");


//var geo = require("geo");
var api = require("api");

var ui = require("ui");
ui.runUi();


var ifNet = function(){
if (Ti.Network.online){
	console.log("online");
	
	api.getJson();
	
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


