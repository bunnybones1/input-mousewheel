var MouseWheel = require('./');

var QuickText = require('dom-quick-text');

var mouseWheelLabel = new QuickText('[wheel delta]');

MouseWheel.onMouseWheelSignal.add(function(val) {
	mouseWheelLabel.update('[wheel delta] ' + val)
});
