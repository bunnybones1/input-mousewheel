var EventUtil = require('browser-event-adder');
var signals = require('signals');


var MouseWheel = function(targetElement) {
	var onWheelSignal = new signals.Signal();
	EventUtil.addEvent(targetElement, 'mousewheel', onElementMouseWheel );

	function onElementMouseWheel( event ) {
		onWheelSignal.dispatch(event.wheelDelta, event);
	};
	this.onWheelSignal = onWheelSignal;
};

module.exports = MouseWheel;