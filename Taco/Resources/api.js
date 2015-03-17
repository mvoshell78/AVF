
var getJson = function(){
	
	xhr.open("GET", "http://taco-randomizer.herokuapp.com/random/");
	xhr.send();	

};

var remoteResponce = function(){
	var json = JSON.parse(this.responseText);
	var recipe = {
	 shellName : json.shell.name,
	 shellRecipe : json.shell.recipe,
	 mixinName : json.mixin.name,
	 mixinRecipe : json.mixin.recipe,
	 mixinUrl : json.mixin.url,
	 seasoningName : json.seasoning.name,
	 seasoningRecipe : json.seasoning.recipe,
	 seasoningUrl : json.seasoning.url,
	 condimentName : json.condiment.name,
	 condimentRecipe : json.condiment.recipe,
	 condimentUrl : json.condiment.url,
	 baseName : json.base_layer.name,
	 baseRecipe : json.base_layer.recipe,
	 baseUrl : json.base_layer.url
	 };
	
	console.log(recipe);
 var storage = require("storage");
	storage.storeData(recipe);
	

};

// error for xhr 
var remoteError = function(e){
	Ti.API.debug(status = this.status);
	Ti.API.debug(text = this.responceText);
	Ti.API.debug(error= e.error);
	alert ("HTTP Client Unavailable");
};

// xhr looks for api
var xhr = Ti.Network.createHTTPClient({
	onload :  remoteResponce, 
	onError: remoteError, 
	timeout : 5000
	
});

exports.remoteResponce = remoteResponce;
exports.getJson = getJson;