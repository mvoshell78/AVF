var page3fn = function(lat, lng){

	
	
	console.log(lat,lng);
	var url = "http://api.wunderground.com/api/d0597510b3186fce/conditions/q/" + lat + ","  + lng + ".json" ;
	console.log(url);
	

	
};
exports.page3fn = page3fn;