

var readData = function(){
	var db = Ti.Database.open("weatherDB");
	var dbResult = db.execute("SELECT * FROM weatherTBL");
	var rowCount = dbResult.rowCount;
	while (dbResult.isValidRow()){
		var localData = {
			id: dbResult.fieldByName("id"),
			time: dbResult.fieldByName("time"),
			city: dbResult.fieldByName("city"), 
			temp: dbResult.fieldByName("temp"),
			weat: dbResult.fieldByName("weat"), 
			hum: dbResult.fieldByName("hum"),
			chill: dbResult.fieldByName("chill"), 
			dir: dbResult.fieldByName("dir"), 
			mph: dbResult.fieldByName("mph"), 
			gust: dbResult.fieldByName("gust"), 
			icon: dbResult.fieldByName("icon")
			
			
		};
		dbResult.next();
		
	}
	console.log(localData);
	console.log("rowCount " + rowCount);
	dbResult.close();
	db.close();
	ui.changeTxt(localData);
	
};


var readData2 = function(){
	var db = Ti.Database.open("weatherDB");
	var dbResult = db.execute("SELECT * FROM weatherTBL2");
	var rowCount = dbResult.rowCount;
	while (dbResult.isValidRow()){
		var localData2 = {
			
			title0 : dbResult.fieldByName("title0"), 
			conditions0: dbResult.fieldByName("conditions0"), 
			icon0: dbResult.fieldByName("icon0"), 
			title1 : dbResult.fieldByName("title1"), 
			conditions1: dbResult.fieldByName("conditions1"), 
			icon1: dbResult.fieldByName("icon1"),
			title2 : dbResult.fieldByName("title2"), 
			conditions2 : dbResult.fieldByName("conditions2"), 
			icon2: dbResult.fieldByName("icon2"),
			title3 : dbResult.fieldByName("title3"), 
			conditions3: dbResult.fieldByName("conditions3"), 
			icon3: dbResult.fieldByName("icon3"),
			title4 : dbResult.fieldByName("title4"), 
			conditions4: dbResult.fieldByName("conditions4"), 
			icon4: dbResult.fieldByName("icon4")
			
			
		};
		dbResult.next();
		
	}
	
	console.log("rowCount " + rowCount);
	dbResult.close();
	db.close();
	ui.changeTxt2(localData2);
	
};


var storeData = function(weather){
console.log("storeData ", weather);

var db = Ti.Database.open("weatherDB");

db.execute("CREATE TABLE IF NOT EXISTS weatherTBL (id INTEGER PRIMARY KEY, time TEXT, city TEXT, temp TEXT, weat TEXT, hum TEXT, chill TEXT, dir TEXT, mph TEXT, gust TEXT, icon TEXT)");
db.execute("DELETE FROM weatherTBL");
db.execute("INSERT INTO weatherTBL(time, city, temp, weat, hum ,chill, dir, mph, gust, icon) VALUES (?,?,?,?,?,?,?,?,?,?)",weather.time, weather.city, weather.temp, weather.weat, weather.hum ,weather.chill, weather.dir, weather.mph, weather.gust, weather.icon);
	
	var rowId = db.lastInsertRowId;
		console.log(rowId);
		db.close();

readData();
};

var storeData2 = function(weather2){
console.log("storeData2 ", weather2);

var db = Ti.Database.open("weatherDB");

db.execute("CREATE TABLE IF NOT EXISTS weatherTBL2 (id INTEGER PRIMARY KEY, title0 TEXT, conditions0 TEXT, icon0 TEXT, title1 TEXT, conditions1 TEXT, icon1 TEXT, title2 TEXT, conditions2 TEXT, icon2 TEXT, title3 TEXT, conditions3 TEXT, icon3 TEXT, title4 TEXT, conditions4 TEXT, icon4 TEXT)");
db.execute("DELETE FROM weatherTBL2");
db.execute("INSERT INTO weatherTBL2(title0, conditions0, icon0, title1, conditions1, icon1, title2, conditions2, icon2, title3, conditions3, icon3, title4, conditions4, icon4) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",weather2.title0, weather2.conditions0, weather2.icon0, weather2.title1, weather2.conditions1, weather2.icon1, weather2.title2, weather2.conditions2, weather2.icon2, weather2.title3, weather2.conditions3, weather2.icon3, weather2.title4, weather2.conditions4, weather2.icon4);
	var rowId = db.lastInsertRowId;
		console.log(rowId);
		db.close();

readData2();
};


exports.storeData2 = storeData2;
exports.storeData = storeData;

exports.readData2 = readData2;
exports.readData = readData;




