var favUi = require("favUi");

var readFav = function(){
	var db = Ti.Database.open("recipeDB");
	var dbResult = db.execute("SELECT * FROM favTBL ");
	var i = dbResult.rowCount - 1;
	var saveArray = [];
	while (dbResult.isValidRow()){
		
		saveArray.push({
			baseName : dbResult.fieldByName("baseName"), 
			baseUrl: dbResult.fieldByName("baseUrl"),
			baseRecipe: dbResult.fieldByName("baseRecipe"),
			condimentName: dbResult.fieldByName("condimentName"), 
			condimentRecipe: dbResult.fieldByName("condimentRecipe"),
			condimentUrl: dbResult.fieldByName("condimentUrl"),
			mixinName: dbResult.fieldByName("mixinName"),
			mixinRecipe: dbResult.fieldByName("mixinRecipe"), 
			mixinUrl: dbResult.fieldByName("mixinUrl"), 
			seasoningName: dbResult.fieldByName("seasoningName"), 
			seasoningRecipe: dbResult.fieldByName("seasoningRecipe"), 
			seasoningUrl: dbResult.fieldByName("seasoningUrl"),
			shellName: dbResult.fieldByName("shellName"), 
			shellRecipe: dbResult.fieldByName("shellRecipe"),
			
			
		});
		dbResult.next();
		
	}
	//console.log("localData" + saveArray[i]);
	//console.log("rowCount " + i);
	dbResult.close();
	db.close();
	favUi.runUi2(saveArray,i);
	
};



var storeFav = function(recipe){
//console.log("favData ", recipe);

var db = Ti.Database.open("recipeDB");

db.execute("CREATE TABLE IF NOT EXISTS favTBL (id INTEGER PRIMARY KEY, baseName TEXT, baseUrl TEXT, baseRecipe TEXT, condimentName TEXT, condimentRecipe TEXT, condimentUrl TEXT, mixinName TEXT, mixinRecipe TEXT, mixinUrl TEXT, seasoningName TEXT, seasoningRecipe TEXT, seasoningUrl TEXT,  shellName TEXT, shellRecipe TEXT)");
//db.execute("DELETE FROM favTBL");
db.execute("INSERT INTO favTBL(baseName, baseUrl, baseRecipe, condimentName, condimentRecipe, condimentUrl, mixinName, mixinRecipe, mixinUrl, seasoningName, seasoningRecipe, seasoningUrl, shellName, shellRecipe) VALUES (?,?,?, ?,?,?, ?,?,?, ?,?,?, ?,?)",recipe.baseName, recipe.baseUrl, recipe.baseRecipe, recipe.condimentName, recipe.condimentRecipe, recipe.condimentUrl, recipe.mixinName, recipe.mixinRecipe, recipe.mixinUrl, recipe.seasoningName, recipe.seasoningRecipe, recipe.seasoningUrl, recipe.shellName, recipe.shellRecipe);
	
	var rowId = db.lastInsertRowId;
		//console.log("rowId" + rowId);
		db.close();

readFav();
};




exports.storeFav = storeFav;
exports.readFav = readFav;