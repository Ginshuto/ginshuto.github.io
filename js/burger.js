(function () {
	var triggerBttn = document.getElementById('trigger-overlay'),
		overlay = document.querySelector('div.overlay'),
		closeBttn = overlay.querySelector('button.overlay-close');
	link1 = overlay.querySelector('nav ul li .un');
	link2 = overlay.querySelector('nav ul li .deux');
	link3 = overlay.querySelector('nav ul li .trois');
	link4 = overlay.querySelector('nav ul li .quatre');
	link5 = overlay.querySelector('nav ul li .cinq');
	transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		support = {
			transitions: Modernizr.csstransitions
		};

	function toggleOverlay() {
		if (classie.has(overlay, 'open')) {
			classie.remove(overlay, 'open');
			classie.add(overlay, 'close');
			var onEndTransitionFn = function (ev) {
				if (support.transitions) {
					if (ev.propertyName !== 'visibility') return;
					this.removeEventListener(transEndEventName, onEndTransitionFn);
				}
				classie.remove(overlay, 'close');
			};
			if (support.transitions) {
				overlay.addEventListener(transEndEventName, onEndTransitionFn);
			} else {
				onEndTransitionFn();
			}
		} else if (!classie.has(overlay, 'close')) {
			classie.add(overlay, 'open');
		}
	}

	triggerBttn.addEventListener('click', toggleOverlay);
	closeBttn.addEventListener('click', toggleOverlay);
	link1.addEventListener('click', toggleOverlay);
	link2.addEventListener('click', toggleOverlay);
	link3.addEventListener('click', toggleOverlay);
	link4.addEventListener('click', toggleOverlay);
	link5.addEventListener('click', toggleOverlay);
})();