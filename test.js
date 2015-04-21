var MouseWheel = require('./');

var QuickText = require('dom-quick-text');

var mouseWheelLabel = new QuickText('[wheel delta]');

var wrapperDiv = document.createElement('div');
wrapperDiv.id = 'wrapper';
document.getElementsByTagName('body')[0].appendChild(wrapperDiv);
// console.log(wrapperDiv);
wrapperDiv.style.left = '0px';
wrapperDiv.style.position = 'absolute';
wrapperDiv.style['background-color'] = '#ffaaaa';
wrapperDiv.style.top = '0px';
wrapperDiv.style.paddingTop = '200px';
wrapperDiv.style.width = '100%';
wrapperDiv.style['z-index'] = -1;
wrapperDiv.style.height = '100%';


var containerDiv = document.createElement('div');
containerDiv.id = 'threejsContainer';
wrapperDiv.appendChild(containerDiv);
// console.log(containerDiv);
containerDiv.style.left = '0px';
containerDiv.style['background-color'] = '#aaffaa';
containerDiv.style.top = '0px';
containerDiv.style.width = '100%';
containerDiv.style.position = 'relative';
containerDiv.style.height = '400px';


var scroll = false;

var mouseWheel = new MouseWheel(containerDiv);	
mouseWheel.onWheelSignal.add(function(val, event) {
	mouseWheelLabel.update('[wheel delta] ' + val)
	if(!scroll) event.preventDefault();
});
