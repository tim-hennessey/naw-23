var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var hero = document.getElementById('hero');
	var txt1 = document.getElementById('txt1');
	var txt2 = document.getElementById('txt2');
	var txt3 = document.getElementById('txt3');
	var txt4 = document.getElementById('txt4');
	var txt5 = document.getElementById('txt5');
	
	var txt = document.getElementsByClassName('txt');
	var t = TweenMax;
	var tl1 = new TimelineMax();

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		// t.set(hero, {transformOrigin: "50% 50%"});
		t.set(txt, {y:"+=10"});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		t.to(hero, 12, {scale:.55, rotationZ:".01deg", ease: Sine.easeOut});

		tl1.to(txt1, .5, {y:"-=10", autoAlpha:1, ease: Sine.easeInOut})
		.to(txt2, .5, {y:"-=10", autoAlpha:1, ease: Sine.easeInOut}, "-=.4")
		.to(txt3, .5, {y:"-=10", autoAlpha:1, ease: Sine.easeInOut}, "-=.4")
		.to(txt4, .5, {y:"-=10", autoAlpha:1, ease: Sine.easeInOut}, "-=.4")
		.to(txt5, .5, {y:"-=10", autoAlpha:1, ease: Sine.easeInOut}, "-=.4");
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
