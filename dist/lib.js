(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.lib = factory());
}(this, (function () { 'use strict';

	var index = (function (message) {
	  return "hello, ".concat(message);
	});

	return index;

})));
