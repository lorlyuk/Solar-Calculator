$(function () {
    window.solarApp = (function () {

    	var getQuery = function () {
    		var customerId = parseInt($('select[name="customer_type"]').val());
    		var regionId = parseInt($('select[name="region_name"]').val());
    		var panelId = parseInt($('select[name="panel_type"]').val());
    		var expectedPower = parseFloat($('input[name="power"]').val());
    		var customerQuery = {
    			customerId: customerId,
    			regionId: regionId,
    			panelId: panelId,
    			expectedPower: expectedPower
    		};
    		$.ajax('/result' , {
    			method: 'POST',
    			data: customerQuery
    		}).done(displayResult);
    	};

    	var displayResult = function (data) {
            var square = data[0].customer.expected_power / (data[0].type_of_solar_panel.panel_power * data[0].type_of_solar_panel.panel_area);
            var pannelQuantity =  square / data[0].type_of_solar_panel.panel_area;

            
            var result = '<div>Panel square: ' + (square).toFixed(2) + '</div>';
                result += '<div>Panels number: ' + Math.ceil(pannelQuantity) + '</div>';
            console.log(data);
    		$('#result').html(result);
    	};

        var getSquare = function(instance){
            var result = null;


            return result;
        };

    	return {
    		getQuery: getQuery,
            displayResult: displayResult
    	}

	})();

});