$(function () {
    window.solarObj = (function () {

        var searchByAll = function() {
				$.ajax('/all').done(displayAllItems);
    	};