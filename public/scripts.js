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
    		$('#result').text('data');
    	};

    	return {
    		getQuery: getQuery
    	}

	})();

});