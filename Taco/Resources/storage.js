var readData = function(){
	var db = Ti.Database.open("recipeDB");
	var dbResult = db.execute("SELECT * FROM recipeTBL");
	var rowCount = dbResult.rowCount;
	while (dbResult.isValidRow()){
		var localData = {
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
			
			
		};
		dbResult.next();
		
	}
	console.log(localData);
	console.log("rowCount " + rowCount);
	dbResult.close();
	db.close();
	ui.runUi(localData);
	
};



var storeData = function(recipe){
console.log("storeData ", recipe);

var db = Ti.Database.open("recipeDB");

db.execute("CREATE TABLE IF NOT EXISTS recipeTBL (id INTEGER PRIMARY KEY, baseName TEXT, baseUrl TEXT, baseRecipe TEXT, condimentName TEXT, condimentRecipe TEXT, condimentUrl TEXT, mixinName TEXT, mixinRecipe TEXT, mixinUrl TEXT, seasoningName TEXT, seasoningRecipe TEXT, seasoningUrl TEXT,  shellName TEXT, shellRecipe TEXT)");
db.execute("DELETE FROM recipeTBL");
db.execute("INSERT INTO recipeTBL(baseName, baseUrl, baseRecipe, condimentName, condimentRecipe, condimentUrl, mixinName, mixinRecipe, mixinUrl, seasoningName, seasoningRecipe, seasoningUrl, shellName, shellRecipe) VALUES (?,?,?, ?,?,?, ?,?,?, ?,?,?, ?,?)",recipe.baseName, recipe.baseUrl, recipe.baseRecipe, recipe.condimentName, recipe.condimentRecipe, recipe.condimentUrl, recipe.mixinName, recipe.mixinRecipe, recipe.mixinUrl, recipe.seasoningName, recipe.seasoningRecipe, recipe.seasoningUrl, recipe.shellName, recipe.shellRecipe);
	
	var rowId = db.lastInsertRowId;
		console.log(rowId);
		db.close();

readData();
};


exports.storeData = storeData;
exports.readData = readData;