
var storage = require("storage");



var runUi = function(recipe){
/*var changeTxt = function(recipe){
	baseNameL.text = recipe.baseName;
	baseRecL.text = recipe.baseRecipe;
	conNameL.text = recipe.condimentName;
	conRecL.text = recipe.condimentRecipe;
	mixNameL.text = recipe.mixinName;
	mixRecL.text = recipe.mixinRecipe;
	seaNameL.text = recipe.seasoningName;
	seaRecL.text = recipe.seasoningRecipe;
	sheNameL.text = recipe.shellName;
	sheRecL.text = recipe.shellRecipe;
	
	console.log("changeTxt " + recipe.baseName);
};*/

var win1 = Ti.UI.createWindow({
	backgroundImage : "/images/background.jpg",
	layout : "vertical"	
});
var win2 = Ti.UI.createWindow({
	backgroundImage : "/images/background.jpg",
	layout : "vertical"
});

var api = require("api");

	var recScroll = Ti.UI.createScrollView({
	 height: '80%',
 	 width: '50%',
 	 borderRadius : 10,
 	 top : 40,
 	 layout : "vertical",
	 showVerticalScrollIndicator: true,
	 contentWidth: 'auto',
  	 contentHeight: 'auto',
  	 scrollType: "vertical"
});
	var baseNameV = Ti.UI.createView({
		top : 5,
		name : "baseName",
		height : "15%",
		width : "80%"
		
	});
	var conNameV = Ti.UI.createView({
		top : 5,
		name: "conName",
		height : "15%",
		width : "80%"	
	});
	var mixNameV = Ti.UI.createView({
		top : 5,
		name : "mixName",
		height : "15%",
		width : "80%"
		
	});
	var seaNameV = Ti.UI.createView({
		top : 5,
		name : "seaName",
		height : "15%",
		width : "80%"
		
		
	});
	var sheNameV = Ti.UI.createView({
		top : 5,
		name : "sheName",
		height : "15%",
		width : "80%"
		
		
	});
	
	var nameLabel  = Ti.UI.createLabel({
			text : recipe.baseRecipe,
			font: {fontSize: 20, fontFamily: "Roboto",fontWeight : "bold"  },
			top : 20,
			color : "black"
		});
	var recLabel  = Ti.UI.createLabel({
			text : recipe.baseRecipe,
			font: {fontSize: 20, fontFamily: "Roboto"  },
			top : 20,
			color : "black"
		});
		
	var baseNameL  = Ti.UI.createLabel({
			text : recipe.baseName,
			name : "baseName",
			font: {fontSize: 20, fontFamily: "Roboto"},
			top : 20,
			color : "black"
		});
	var conNameL  = Ti.UI.createLabel({
			text : recipe.condimentName,
			name : "conName",
			font: {fontSize: 20, fontFamily: "Roboto"  },
			top : 20,
			color : "black"
		});	
	var mixNameL  = Ti.UI.createLabel({
			text : recipe.mixinName,
			name : "mixName",
			font: {fontSize: 20, fontFamily: "Roboto"  },
			top : 20,
			color : "black"
		});
	var seaNameL  = Ti.UI.createLabel({
			text : recipe.seasoningName,
			name : "seaName",
			font: {fontSize: 20, fontFamily: "Roboto"  },
			top : 20,
			color : "black"
		});
	var sheNameL  = Ti.UI.createLabel({
			text : recipe.shellName,
			name : "sheName",
			font: {fontSize: 20, fontFamily: "Roboto", fontWeight : "bold"  },
			top : 20,
			color : "black"
		});
	var getNewView = Ti.UI.createView ({
		height : "5%",
		top: 40,
		width : "50%",
		name: "getNew",
		backgroundColor : ("#BFCFCC"),
	});
	var getNew = Ti.UI.createLabel({
	text : "Get new recipe",
	font: {fontSize: 20, fontFamily: "Roboto" },
	name : "getNew",
	color : "black" 
});

	var showCamera = Ti.UI.createLabel({
	text : "Take a pic",
	font: {fontSize: 20, fontFamily: "Roboto"},
	name : "camera",
	color : "black" 
});
	var showCameraView = Ti.UI.createView ({
		height : "5%",
		top: 5,
		width:  "50%",
		name : "camera",
		backgroundColor : ("#BFCFCC"),
	});
	var back = Ti.UI.createLabel({
	text : "Return to Recipes",
	font: {fontSize: 20, fontFamily: "Roboto"   },
	color : "black"
	
	 
});
	var backV = Ti.UI.createView({
	backgroundColor : ("#BFCFCC"),
	height : "5%",
	width : "50%",
	bottom : 0
});
	
backV.add(back);

getNewView.add(getNew);
win1.add(getNewView);	

win1.add(baseNameV);
win1.add(conNameV);
win1.add(mixNameV);
win1.add(seaNameV);
win1.add(sheNameV);

recScroll.add(nameLabel);
recScroll.add(recLabel);
win2.add(recScroll);
win2.add(backV);

baseNameV.add(baseNameL);
conNameV.add(conNameL);
mixNameV.add(mixNameL);	
seaNameV.add(seaNameL);
sheNameV.add(sheNameL);

showCameraView.add(showCamera);	
win1.add(showCameraView);
win1.open();
	
backV.addEventListener("click", function(e){
	console.log("back button fired");
	var storage = require("storage");
	win2.close();
	
	win1.open();
		
} );

win1.addEventListener('click', function(e){
	console.log("click" + e.source.name);
	
	if (e.source.name === "baseName") {
		console.log( "base Name");
		
		win1.close();
	
		nameLabel.text = recipe.baseName;
		recLabel.text = recipe.baseRecipe;
		
		
		win2.open();
	};
	if (e.source.name === "conName") {
		console.log( "con Name");
		
	
		
		win1.close();
		nameLabel.text = recipe.condimentName;
		recLabel.text = recipe.condimentRecipe;
		
		win2.open();
	};
	if (e.source.name === "mixName") {
		console.log( "mix Name");
		
		win1.open();
		
		nameLabel.text = recipe.mixinName;
		recLabel.text = recipe.mixinRecipe;
		
		win2.open();
	};
	if (e.source.name === "seaName") {
		console.log( "sea Name");
		
		
		win1.open();
		
		nameLabel.text = recipe.seasoningName;
		recLabel.text = recipe.seasoningRecipe;
		win2.open();
	};
	if (e.source.name === "sheName") {
		console.log( "she Name");
		
		
		win1.open();
		
		nameLabel.text = recipe.shellName;
		recLabel.text = recipe.shellRecipe;
		win2.open();
	};
	if (e.source.name === "camera") {
		console.log( "camera");
	
	
	
	Ti.Media.showCamera({
		saveToPhotoGallery: true,
		mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
		success: function(event) {
			if(event.mediaType === Ti.Media.MEDIA_TYPE_PHOTO) {
				alert ("Image saved to camera roll");
			} else {
				alert("error" + event.mediaType);
			}
		},
		error: function(error) {
			if (error.code === Ti.Media.NO_CAMERA) {
				alert("No Camera Detected");
			} else {
				alert("other error: " + error.code);
			}
		}
	});
	 //closing showCamera
	}; if (e.source.name === "getNew") {
		var api = require("api");
		api.getJson();
	};
	
});
//exports.changeTxt = changeTxt;

};

	
exports.runUi = runUi;