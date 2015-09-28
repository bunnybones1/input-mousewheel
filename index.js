var EventUtil = require('browser-event-adder');
var signals = require('signals');


var MouseWheel = function(targetElement) {
	var onWheelSignal = new signals.Signal();
	EventUtil.addEvent(targetElement, 'mousewheel', onElementMouseWheel );
	EventUtil.addEvent(targetElement, 'DOMMouseScroll', onElementMouseWheel ); // Firefox

	function onElementMouseWheel( event ) {
		var delta;

		if (event.wheelDelta !== undefined ) {
			delta = event.wheelDelta;
		} else if ( event.detail !== undefined ) { // Firefox
			delta = -30 * event.detail;
		}

		onWheelSignal.dispatch(delta, event);
	};
	this.onWheelSignal = onWheelSignal;
};

module.exports = MouseWheel;