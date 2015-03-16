


var runUi = function(){

var win1 = Ti.UI.createWindow({
	backgroundColor : ("#A31E39"),
	layout : "vertical"	
});

var api = require("api");

win1.open();	

};

var changeTxt = function(recipie){
	console.log("changeTxt " + recipie.baseName );
};

exports.runUi = runUi;
exports.changeTxt = changeTxt;