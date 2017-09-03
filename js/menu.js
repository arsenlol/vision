$(document).ready(function(){

	$('.menu-button').click(function(){
		$('.menu-block').toggleClass('open');
		$('body').toggleClass('menu-open');
		if ($('.menu-block').hasClass('open')) {
			$('#menu-logo img')
				.attr('src','')
				.attr('src','./img/logo-black.gif');
			setTimeout(function(){
				$('#menu-logo img').attr('src','./img/logo-black.png');
			}, 2000)
		}
	});

	$(document).on('mouseover', function(e){
		if (e.target === document.getElementById('menu-logo')) {
			$('#menu-logo img').attr('src','./img/logo-black.gif');
		} else {
			$('#menu-logo img').attr('src','./img/logo-black.png');
		}
	});

	resizeMenu();
	$(window).on('resize', resizeMenu);

	function resizeMenu(){
		let wh = window.innerHeight,
			menuFooterHeight = 50,
			menuMargin = (window.innerWidth > 1199) ? 50 : 0,
			menuHeight = wh - menuMargin,
			menuElementLineHeight = (menuHeight - menuFooterHeight) / 6;
		$('.menu-block').css('height', menuHeight + 'px');
		$('.menu-block nav').css('height', (menuHeight - menuFooterHeight) + 'px');
		$('.menu-row').css({
			lineHeight: menuElementLineHeight + 'px',
			height: menuElementLineHeight + 'px'
		});
	}

});