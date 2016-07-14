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
	
	var searchByCustomer = function (customerName) {		
		// All coll stuff find here
		var result = [];
		var expression = new RegExp("^" + customerName + "(.*)");
		for(var i = 0; i < data.length; ++i) {
			if(data[i].key.customer.name.search(expression) > -1) {
				result.push(data[i]);
			}
		}
		return result;
	};
	
	var searchByWorker = function (id) {		
		var result = [];
		for (var i = 0; i < data.length; ++i) {
			if (data[i].worker.id === parseInt(id)) {
				result.push(data[i]);
			}
		}
		return result;
	};