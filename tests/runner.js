var _ = require('lodash');
var solarTest = require('./module.js');

_.each(solarTest, function (test) {
    test();    
});