var api = require("api");
var cloudModule = require("ti.cloud");

cloudModule.debug = true;

var userId;

var loginCloud = function(){
	cloudModule.Users.login({
		login : "com.voshell.taco",
		password : "12345"
	}, function(e) {
		if (e.success) {
			console.log("cloud working!");
			api.getJson();
	
		} else {
			alert ("error " + e.message);
		}
	});
};

var saveCloud = function(recipe) {
	console.log("cloud");
	console.log(recipe);
	cloudModule.Objects.create({
		classname : "randomTacoRecipe",
		fields : {
			shellName : recipe.shellName,
		 	shellRecipe : recipe.shellRecipe,
			mixinName : recipe.mixinName,
			mixinRecipe : recipe.mixinRecipe,
			mixinUrl : recipe.mixinUrl,
			seasoningName : recipe.seasoningName,
			seasoningRecipe : recipe.seasoningRecipe,
			seasoningUrl : recipe.seasoningUrl,
		 	condimentName : recipe.condimentName,
			condimentRecipe : recipe.condimentRecipe,
			condimentUrl : recipe.condimentUrl,
			baseName : recipe.base_layerName,
		 	baseRecipe : recipe.base_layerRecipe,
			baseUrl : recipe.base_layerUrl
		}
		
	}, function(e) {
		if (e.success) {
			console.log("Cloud Works!");
		} else {
			alert ("Cloud no worky :(");
		}
		
	});
	
};

exports.loginCloud = loginCloud;
exports.saveCloud = saveCloud;