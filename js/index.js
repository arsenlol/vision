$(document).ready(function(){

	$('#screen1').hover(function(e){
		$('#screen1 .picture img').attr('src','./img/logo-black.gif');
	}).mouseleave(function(e){
		$('#screen1 .picture img').attr('src','./img/logo-black.png');
	});

	$('.index-lang-block').on('mouseover', function(e){
		if ($(e.target).hasClass('lang-item')) {
			let el = $(e.target).index();
			let offset;
			switch (el) {
				case 1 : offset = '8px' ; break;
				case 2 : offset = '50px' ; break;
				case 3 : offset = '90px'; break;
			}
			$('.lang-decor').css('left',offset);
		}
	});

	(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
	|| window[vendors[x]+'CancelRequestAnimationFrame'];
	}
	if (!window.requestAnimationFrame)
	window.requestAnimationFrame = function(callback, element) {
	var currTime = new Date().getTime();
	var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
	timeToCall);
	lastTime = currTime + timeToCall;
	return id;
	};
	if (!window.cancelAnimationFrame)
	window.cancelAnimationFrame = function(id) {
	clearTimeout(id);
	};
	}());

	let screens = (function(){
					let nodeList = document.querySelectorAll('td:not(.index-nav-el):not(#screen1)'),
						arr = [];
					for(var i = 0, n; i < nodeList.length; ++i) {
						n = nodeList[i]; arr.push(n);
					}
					return {els:shuffle(arr), delays:random(200,arr.length)};
				  })();

	let visionScreen = document.getElementById('screen1');
	let bigScreens = { els:document.getElementsByClassName('big'), delays:[600,600,600] };
	let	otherScreens = { els:document.querySelectorAll('.index-nav-el:not(.big):not(#screen1)'), delays:[600,600,600,600,600] };
	let counter = 0;	
	let request;

	setTimeout(turnTvOn,1000)

	function turnTvOn() {
		if (counter === screens.els.length) { 
			window.cancelAnimationFrame(request);
			counter = 0;
			setTimeout(function(){
				visionScreen.classList.add('on');
				console.log('Logo'+(counter+1)+' animation activated');
				setTimeout(turnBigScreensOn,1000);
			},100)
			return;
		}
		screens.els[counter].classList.add('on');
		console.log('TVScreen'+(counter+1)+' animation activated');
		counter++;
	  	setTimeout(function(){
	  		request = window.requestAnimationFrame(turnTvOn);
	  	}, screens.delays[counter])
	}
	 

	function turnBigScreensOn() {
		if (counter === bigScreens.els.length) { 
			window.cancelAnimationFrame(request);
			counter = 0;
			setTimeout(turnOtherScreensOn,1000);
			return;
		}
		bigScreens.els[counter].classList.add('on');
		console.log('bigScreen'+(counter+1)+' animation activated');
		counter++;
	  	setTimeout(function(){
	  		request = window.requestAnimationFrame(turnBigScreensOn);
	  	}, bigScreens.delays[counter])
	}

	function turnOtherScreensOn() {
		if (counter === otherScreens.els.length) { 
			window.cancelAnimationFrame(request);
			setTimeout(function(){
				for (el of otherScreens.els) { 
					el.classList.add('show-text');
				}
				console.log('otherScreens text animation activated');
			},800);
			return;
		}
		otherScreens.els[counter].classList.add('on');
		console.log('otherScreens'+(counter+1)+' animation activated');
		counter++;
	  	setTimeout(function(){
	  		request = window.requestAnimationFrame(turnOtherScreensOn);
	  	}, otherScreens.delays[counter])
	}

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	function random(max,times){
	    if (times===undefined) {
	        return (Math.round(Math.random()*max))
	    } else {
			var arr = [];
			for (var i = 0; i < times; i++){
				arr.push(Math.round(Math.random()*max));
			}
			return arr;
	    }
	}
});