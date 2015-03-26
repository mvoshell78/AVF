


var runUi2 = function(recipe,i){

var win3 = Ti.UI.createWindow({
	backgroundColor : "#F8F5E1",
	//backgroundImage : "/images/background.jpg",
	layout : "vertical"
});	
var win4 = Ti.UI.createWindow({
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
var nameLabel2  = Ti.UI.createLabel({
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

var recLabel2  = Ti.UI.createLabel({
	text : "",
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
	text : "",
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
	text : "",
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
	text : "",
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
	text : "",
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

var backV = Ti.UI.createView({
	backgroundColor : ("#B22222 "),
	height : "7%",
	width : "50%"
});
var back = Ti.UI.createLabel({
	text : "Return to Recipes",
	font: {fontSize: 20, fontFamily: "Roboto"   },
	color : "white" 
});
var favorite = Ti.UI.createLabel({
	text : " Favorites ",
	top : 15,
	font: {fontSize: 40, fontFamily: "Roboto"   },
	color : "black"
});
var retRec = Ti.UI.createButton({
	title : "Return to Recipes",
	font: {fontSize: 30, fontFamily: "Roboto"   },
	color : "#A32929",
	width: "50%",
	height : "7%",
	name : "retRec"
});

var next = Ti.UI.createButton({
	title : "Saved Recipes",
	font: {fontSize: 30, fontFamily: "Roboto"   },
	color : "#A32929",
	width: "50%",
	height : "7%",
	name : "next"
});
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

backV.add(back);
win3.add(favorite);
win3.add(baseNameV);
win3.add(conNameV);
win3.add(mixNameV);
win3.add(seaNameV);
win3.add(sheNameV);	
win3.add(retRec);
win3.add(next);

recScroll.add(nameLabel2);
recScroll.add(recLabel2);

win4.add(recScroll);
win4.add(backV);
console.log("runUi2 " + recipe,i);	
baseNameL.text = recipe[i].baseName;	
conNameL.text = recipe[i].condimentName;
mixNameL.text = recipe[i].mixinName;
seaNameL.text = recipe[i].seasoningName;
sheNameL.text = recipe[i].shellName;

if (Ti.Platform.osname === "android") {
win3.backgroundColor =  ("#F8F5E1");
win4.backgroundColor =  ("#F8F5E1");
recScroll.width = "90%";
} else {

	win3.backgroundImage  = "/images/background.jpg";
	win4.backgroundImage  = "/images/background.jpg";
	recScroll.width = "50%";
};	
win3.open();

backV.addEventListener("click", function(e){
console.log("back button fired");

win4.close();
win3.open();	
} );	
win3.addEventListener('click', function(e){
	console.log("click" + e.source.name);
	
	if (e.source.name === "baseName") {
		console.log( "base Name");
		
		win3.close();
	
		nameLabel2.text = recipe[i].baseName;
		recLabel2.text = recipe[i].baseRecipe;
		
		win4.open();
	};
	if (e.source.name === "conName") {
		console.log( "con Name");
		
		win3.close();
		nameLabel2.text = recipe[i].condimentName;
		recLabel2.text = recipe[i].condimentRecipe;
		
		win4.open();
	};
	if (e.source.name === "mixName") {
		console.log( "mix Name");
		
		win3.close();
		
		nameLabel2.text = recipe[i].mixinName;
		recLabel2.text = recipe[i].mixinRecipe;
		
		win4.open();
	};
	if (e.source.name === "seaName") {
		console.log( "sea Name");
		
		win3.close();
		
		nameLabel2.text = recipe[i].seasoningName;
		recLabel2.text = recipe[i].seasoningRecipe;
		
		win4.open();
	};
	if (e.source.name === "sheName") {
		console.log( "she Name");
		
		
		win3.close();
		
		nameLabel2.text = recipe[i].shellName;
		recLabel2.text = recipe[i].shellRecipe;
		
		win4.open();
	};
	if (e.source.name === "retRec"){
		console.log(" retRec");
		
		win3.close();
		ifNet();
	};
	if (e.source.name === "next"){
		console.log(recipe.length);
		if (i > 0 ){
		i--;
		console.log("next" + i);
		baseNameL.text = recipe[i].baseName;	
		conNameL.text = recipe[i].condimentName;
		mixNameL.text = recipe[i].mixinName;
		seaNameL.text = recipe[i].seasoningName;
		sheNameL.text = recipe[i].shellName;
		} else {
			i = recipe.length;
		};
	};
});	
};

exports.runUi2 = runUi2;