var module = require('./../models/module.js');
module.exports = (function (){
	var test1 = function(){
		console.log('Test 1');
		var expectedValue = 1;
		var realValue = module.getResult('1', '1', '1', '8').length;
		if(expectedValue === realValue){
			console.log("[Test passed]");
			return true;
		}
		else{
			console.log("[Test failed] : function should return 1 element(1 object with 5 elements) ");
			return false;
		}
	};
	
	
	return {
		test1: test1,
		
    };
})();