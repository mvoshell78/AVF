var fromAppJs = function (arg1){
	console.log("page2 accessed");
	console.log(arg1);
	var page2txt = "from page 2";
	var page3 = require("page3");
	var lat = 39.1;
	var lng = -75.4;
	page3.page3fn(lat, lng);
	

			
};


exports.fromAppJs = fromAppJs;