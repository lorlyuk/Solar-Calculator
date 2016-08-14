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

        var data = getDataFromFile(dbFilePath);
        
        var prepareResult = function(query) {
        		var result =[];
              //  console.log(query);
                for (var i = 0; i < data.length; ++i) {
        			
        			if ((data[i].customer.customer_id == query.customerId) 
                        && (data[i].customer.region.id == query.regionId) 
                        && (data[i].type_of_solar_panel.panel_id == query.panelId)) {
        				data[i].customer.expected_power = parseFloat(query.expectedPower);
                        console.log(data[i].customer);
                        result.push(data[i]);

        			}
        		}
            
        		return result;
        	}

        var getResult = function(params) {
        	var result = [];
        	
            return prepareResult(params);
        	
        };


        return {
        	getResult: getResult            
        }
})();



