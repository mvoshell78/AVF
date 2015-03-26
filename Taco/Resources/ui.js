
var storage = require("storage");



var runUi = function(recipe,i){
	



var win1 = Ti.UI.createWindow({
	backgroundColor: "#F8F5E1",
	//backgroundImage : "/images/background.jpg",
	layout : "vertical"	
});
var win2 = Ti.UI.createWindow({
	backgroundColor : "#F8F5E1",
	//backgroundImage : "/images/background.jpg",
	layout : "vertical"
});	

	
var recScroll = Ti.UI.createScrollView({
	 height: '90%',
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
		name : "baseName",
		height : "15%",
		width : "80%",
		layout: "vertical"
		
	});
var conNameV = Ti.UI.createView({
		top : 3,
		name: "conName",
		height : "15%",
		width : "80%",
		layout: "vertical"	
	});
var mixNameV = Ti.UI.createView({
		top : 3,
		name : "mixName",
		height : "15%",
		width : "80%",
		layout: "vertical"
		
	});
var seaNameV = Ti.UI.createView({
	top : 3,
	name : "seaName",
	height : "15%",
	width : "80%",
	layout: "vertical"
	
	
	});
var sheNameV = Ti.UI.createView({
	top : 3,
	name : "sheName",
	height : "15%",
	width : "80%",
	layout: "vertical"
	
	
});	
var nameLabel  = Ti.UI.createLabel({
	text : "recipe[i].baseRecipe,",
	font: {fontSize: 20, fontFamily: "Roboto",fontWeight : "bold"  },
	top : 20,
	color : "black"
});
var baseNameL  = Ti.UI.createLabel({
	text : "recipe[i].baseName",
	name : "baseName",
	font: {fontSize: 23, fontFamily: "Roboto"  },
	top : 15,
	color : "black"
});

var recLabel  = Ti.UI.createLabel({
	text : "recipe[i].baseRecipe",
	font: {fontSize: 20, fontFamily: "Roboto"  },
	top : 20,
	color : "black"
});
var base = Ti.UI.createLabel({
	text : "Filling : ",
	name : "baseName",
	font: {fontSize: 27, fontFamily: "Roboto",fontWeight : "bold"  },
	top : 20,
	color : "#A32929"
});
var conNameL  = Ti.UI.createLabel({
	text : "recipe[i].condimentName",
	name : "conName",
	font: {fontSize: 23, fontFamily: "Roboto"  },
	top : 20,
	color : "black"
});	
var con = Ti.UI.createLabel({
	text : "Condiment : ",
	name : "conName",
	font: {fontSize: 27, fontFamily: "Roboto",fontWeight : "bold"  },
	top : 20,
	color : "#A32929"
});
var mixNameL  = Ti.UI.createLabel({
	text : "recipe[i].mixinName",
	name : "mixName",
	font: {fontSize: 23, fontFamily: "Roboto"  },
	top : 20,
	color : "black"
	});
var top = Ti.UI.createLabel({
	text : "Toppings : ",
	name : "mixName",
	font: {fontSize: 27, fontFamily: "Roboto",fontWeight : "bold"  },
	top : 20,
	color : "#A32929"
});
var seaNameL  = Ti.UI.createLabel({
	text : "recipe[i].seasoningName",
	name : "seaName",
	font: {fontSize: 23, fontFamily: "Roboto"  },
	top : 20,
	color : "black"
	});
var sea = Ti.UI.createLabel({
		text : "Seasoning : ",
	name : "seaName",
	font: {fontSize: 27, fontFamily: "Roboto",fontWeight : "bold"  },
	top : 20,
	color : "#A32929"
});
var sheNameL  = Ti.UI.createLabel({
	text : "recipe[i].shellName",
	name : "sheName",
	font: {fontSize: 23, fontFamily: "Roboto"  },
	top : 20,
	color : "black"
	});
var shell = Ti.UI.createLabel({
	text : "Shell Type : ",
	name : "sheName",
	font: {fontSize: 27, fontFamily: "Roboto",fontWeight : "bold"  },
	top : 20,
	color : "#A32929"
});

var getNewView = Ti.UI.createView ({
	width: "50%",
	height: "7%",
	top : 20,
	name: "getNew",
	backgroundColor : ("#B22222"),
});
var getNew = Ti.UI.createLabel({
	text : "Get new random taco recipe:",
	top : 20,
	font: {fontSize: 30, fontFamily: "Roboto" },
	name : "getNew",
	color : "#A32929" 
});

var backV = Ti.UI.createView({
	backgroundColor : ("#B22222 "),
	height : "7%",
	width : "50%"
});
var back = Ti.UI.createLabel({
	text : "Return to Recipes:",
	font: {fontSize: 30, fontFamily: "Roboto"   },
	color : "#A32929" 
});




var heart = Ti.UI.createView({
		name : "heart",
		backgroundImage : "/images/heart.ico",
		right : 20,
		width : 50,
		height : 50
	});
	
	var showCamera = Ti.UI.createLabel({
	text : "Take a pic:",
	font: {fontSize: 30, fontFamily: "Roboto"},
	name : "camera",
	color : "#A32929" 
});
	var showCameraView = Ti.UI.createView ({
		height : "7%",
		bottom : 15,
		width:  "50%",
		name : "camera",
		backgroundColor : ("#B22222 "),
	});
		
baseNameL.text = recipe[i].baseName;	
conNameL.text = recipe[i].condimentName;
mixNameL.text = recipe[i].mixinName;
seaNameL.text = recipe[i].seasoningName;
sheNameL.text = recipe[i].shellName;

//getNewView.add(getNew);

win1.add(getNew);
win1.add(heart);

baseNameV.add(base);
baseNameV.add(baseNameL);

conNameV.add(con);
conNameV.add(conNameL);

mixNameV.add(top);	
mixNameV.add(mixNameL);	

seaNameV.add(sea);
seaNameV.add(seaNameL);

sheNameV.add(shell);
sheNameV.add(sheNameL);


recScroll.add(nameLabel);
recScroll.add(recLabel);
//win1.add(back);

win1.add(baseNameV);
win1.add(conNameV);
win1.add(mixNameV);
win1.add(seaNameV);
win1.add(sheNameV);

win2.add(recScroll);
win2.add(back);





//showCameraView.add(showCamera);	
win1.add(showCamera);

	



if (Ti.Platform.osname === "android") {
win1.backgroundColor =  ("#F8F5E1");
win2.backgroundColor =  ("#F8F5E1");
recScroll.width = "90%";
} else {

	win1.backgroundImage  = "/images/background.jpg";
	win2.backgroundImage  = "/images/background.jpg";
	recScroll.width = "50%";
};	



win1.open();

back.addEventListener("click", function(e){
console.log("back button fired");
//var storage = require("storage");
win2.close();
win1.open();	
} );
	
win1.addEventListener('click', function(e){
	console.log("click" + e.source.name);
	
	if (e.source.name === "baseName") {
		console.log( "base Name");
		
		win1.close();
	
		nameLabel.text = recipe[i].baseName;
		recLabel.text = recipe[i].baseRecipe;
		
		
		win2.open();
	};
	if (e.source.name === "conName") {
		console.log( "con Name");
		
	
		
		win1.close();
		nameLabel.text = recipe[i].condimentName;
		recLabel.text = recipe[i].condimentRecipe;
		
		win2.open();
	};
	if (e.source.name === "mixName") {
		console.log( "mix Name");
		
		win1.close();
		
		nameLabel.text = recipe[i].mixinName;
		recLabel.text = recipe[i].mixinRecipe;
		
		win2.open();
	};
	if (e.source.name === "seaName") {
		console.log( "sea Name");
		
		win1.close();
		
		nameLabel.text = recipe[i].seasoningName;
		recLabel.text = recipe[i].seasoningRecipe;
		
		win2.open();
	};
	if (e.source.name === "sheName") {
		console.log( "she Name");
		
		
		win1.close();
		
		nameLabel.text = recipe[i].shellName;
		recLabel.text = recipe[i].shellRecipe;
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
	if (e.source.name === "heart") {
		console.log(recipe[i]);
		win1.close();
		var fav = require("fav");
		fav.storeFav(recipe[i]);
	};
});
};

	
exports.runUi = runUi;
