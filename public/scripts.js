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
            var pannelQuantity =  data[0].customer.expected_power / data[0].type_of_solar_panel.panel_power;
            var panelCost = (square/data[0].type_of_solar_panel.panel_area) * data[0].type_of_solar_panel.panel_price;
            var installationCosts = panelCost * 0.1;
            var transportationCosts = panelCost * 0.15;
            var allCosts = panelCost + installationCosts + transportationCosts;
            var energyProduced = (data[0].type_of_solar_panel.panel_KPD/100) * (data[0].customer.region.level_of_solar_radiation * 356) * square;
            var valueЕnergyProduced = energyProduced * 0.19;
            var periodPB = panelCost / valueЕnergyProduced;
            
            var result = '<h2>Результат розрахунку по вибраних Вами параметрах</h2><div class="table-responsive"><table class="table">';
                result += '<tr>'+'<td>' + 'Необхідна плаща панелей:' + '</td>' + '<td>' + (square).toFixed(2) + '</td>' + '<td>' + 'квадратних метрів' + '</td>' + '</tr>';
                result += '<tr>'+'<td>' + 'Вам потрібно панелей:'+ '</td>' + '<td>'+ Math.ceil(pannelQuantity) + '</td>' + '<td>' + 'штук' + '</td>' +'</tr>';
                result += '<tr>'+'<td>' + 'Вартість таких панелей становитиме: '+ '</td>' + '<td>' + (panelCost).toFixed(2) + '</td>' + '<td>' + 'євро' + '</td>' +'</tr>';
                result += '<tr>'+'<td>' + 'Витрати на встановленя: '+ '</td>' + '<td>' + (installationCosts).toFixed(2) + '</td>' + '<td>' + 'євро' + '</td>' +'</tr>';
                result += '<tr>'+'<td>' + 'Транспортні витрати: '+ '</td>' + '<td>' + (transportationCosts).toFixed(2) + '</td>' + '<td>' + 'євро' + '</td>' +'</tr>';
                result += '<tr>'+'<td>' + 'Всі витрати: ' + '</td>' + '<td>'+ (allCosts).toFixed(2) + '</td>' + '<td>' + 'євро' + '</td>' +'</tr>';
                result += '<tr>'+'<td>' + 'Кількість згенерованої енергії: ' + '</td>' + '<td>'+ (energyProduced).toFixed(2) + '</td>' + '<td>' + 'кіловат/годину' + '</td>' +'</tr>';
                result += '<tr>'+'<td>' + 'Вартість згенерованої енергії: '+ '</td>' + '<td>' + (valueЕnergyProduced).toFixed(2) + '</td>' + '<td>' + 'євро' + '</td>' +'</tr>';
                result += '<tr>'+'<td>' + 'Строк окупності: ' + '</td>' + '<td>'+ (periodPB).toFixed(1) + '</td>' + '<td>' + 'років' + '</td>' +'</tr>';
            console.log(data);
    		$('#result').html(result);
    	};
        
   	return {
    		getQuery: getQuery,
            displayResult: displayResult
           
    	}

	})();

});