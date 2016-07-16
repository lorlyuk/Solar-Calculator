var fs = require('fs');
var logger = require('./../services/Logger.js');

module.exports = (function () {            
        
        var dbFilePath = './data/data.json';
    
        var getDataFromFile = function (path) {
            try{
                var result = fs.readFileSync(path, 'utf8');
                return JSON.parse(result);
            } catch(e) {
                logger.logError("Can't read from file");
                return [];
            }            
        };
	var searchByAll = function () {		
		var result = [];
    for (var i = 0; i < data.length; ++i) {
        if (data[i].customer.customer_type == "customer_type" & data[i].type_of_solar_panel.panel_type == "panel_type" ) {
        	for (var j = 0; j < data[i].customer.customer_type.region.length; ++j){
			if (data[i].region.region_name[j] == "region_name"){
				
           result.push(data[i]);
       }
    }
    return result;
   };
var expectedPower = function() {



}

/*
площа = очыкувана потужнысть / потужнысть однієї  панелі*площу однієї панелі
кількість панелей  = площа/площу однієї панелі
вартість панелей = кількість панелей * ціну(залежно від класу)
накладні витрати= вартість панелей * 10%
транспортні витрати= вартість панелей * 15%
загальні вартість = вартість панелей+накладні витрати + монтажні витрати
кількість згенерованої енергії = кпд/100 середній коефіцієнт радіації по області*365 площу панелей




	/*
	var searchByCustomer = function (customer_type) {		
		// All coll stuff find here
		var result = [];
    for (var i = 0; i < data.length; ++i) {
        if (data[i].customer.customer_type == customer_type) {
           result.push(data[i]);
       }
    }
    return result;
   };
		
	
	var searchByRegion = function (region_name) {		
		var result = [];
		for (var i = 0; i < data.length; ++i) {
			for (var j = 0; j < data[i].region.length; ++j){
			if (data[i].region.region_name[j] == region_name) {
				result.push(data[i]);
			}
		}
		return result;
	};

	var searchBySolarPanel = function (panel_type) {		
		var result = [];
		for (var i = 0; i < data.length; ++i) {
				if (data[i].type_of_solar_panel.panel_type == panel_type) {
				result.push(data[i]);
			}
		}
		return result;
	};