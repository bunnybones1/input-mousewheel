var EventUtil = require('browser-event-adder');
var signals = require('signals');


var MouseWheel = function(targetElement) {
	var onWheelSignal = new signals.Signal();
	EventUtil.addEvent(targetElement, 'mousewheel', onElementMouseWheel );
	EventUtil.addEvent(targetElement, 'DOMMouseScroll', onElementMouseWheel ); // Firefox

	function onElementMouseWheel( event ) {
		var deltaX, deltaY;

		if (event.wheelDeltaX !== undefined ) {
			deltaX = event.wheelDeltaX;
			deltaY = event.wheelDeltaY;
		} else if ( event.detail !== undefined ) { // Firefox
			deltaX = 0;
			deltaY = -30 * event.detail;
		}

		onWheelSignal.dispatch(deltaX, deltaY, event);
	}
	this.onWheelSignal = onWheelSignal;
};

module.exports = MouseWheel;