var EventUtil = require('browser-event-adder');
var signals = require('signals');

var onMouseWheelSignal = new signals.Signal();
EventUtil.addEvent(document, 'mousewheel', onDocumentMouseWheel );

function onDocumentMouseWheel( event ) {
	onMouseWheelSignal.dispatch(event.wheelDelta, event);
};

var MouseWheel = function() {
};

MouseWheel.prototype = {
	onMouseWheelSignal : onMouseWheelSignal,
};

module.exports = new MouseWheel();