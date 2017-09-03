$(document).ready(function(){

	$('.sport-object-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		draggable: false,
		fade: true,
		autoplaySpeed:3100,
		autoplay: true,
		pauseOnHover: false
	});

	$('.sport-projects-descriptions').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		fade: true,
		speed: 1500,
		cssEase: 'linear',
		appendArrows: '.sport-projects-nav',
		prevArrow: '<div class="slick-prev"><i></i></div>',
		nextArrow: '<div class="slick-next"><i></i></div>',
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      	asNavFor:'.sport-projects-mobile',
		      	speed: 1000,
		      	draggable: true
		      }
		    }
		  ]
	});


	$('.sport-projects-image-1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		draggable: false,
		fade: true,
		speed: 1500,
		arrows: false,
		useTransform: true,
		cssEase: 'cubic-bezier(0.000, 0.000, 0.000, 1.000)',
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      	asNavFor:'.sport-projects-mobile',
		      	draggable: true,
		      	speed: 1000
		      }
		    }
		  ]
	});

	$('.sport-projects-image-2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		draggable: false,
		fade: true,
		ccsEase: 'cubic-bezier(0.500, 0.000, 0.000, 1.000)',
		speed: 1500,
		arrows: false
	});

	$('.sport-projects-image-3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		cssEase: 'cubic-bezier(0.750, 0.005, 0.250, 1.000)',
		draggable: false,
		fade: true,
		speed: 1500,
		arrows: false
	});

	$('.sport-projects-image-4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		draggable: false,
		fade: true,
		cssEase: 'cubic-bezier(1.000, 0.000, 0.500, 1.000)',
		speed: 1500,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      	asNavFor:'.sport-projects-mobile',
		      	draggable: true,
		      	speed: 1000
		      }
		    }
		  ]
	});
	
	$('.sport-exp-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		autoplay: true,
		appendArrows: '.sport-exp-nav',
		prevArrow: '<div class="slick-prev"><i></i></div>',
		nextArrow: '<div class="slick-next"><i></i></div>',
		responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		      	slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 650,
		      settings: {
		      	slidesToShow: 1,
		      }
		    }

		  ]
	});

	$(document).on('click', '.sport-projects-nav .slick-arrow', function(){
		let method = $(this).hasClass('slick-prev') ? 'slickPrev' : 'slickNext'
		if ( window.innerWidth > 991 && !isMobile() ) {
			for (let imageCount = 1; imageCount<=4; imageCount++ ) {
				setTimeout(function(){
					$('.sport-projects-image-'+imageCount).slick(method)
				}, imageCount*1000/5)
			}
		}
	})

	function elementPartInViewport(el) {
	  var top = el.offsetTop;
	  var left = el.offsetLeft;
	  var width = el.offsetWidth;
	  var height = el.offsetHeight;

	  while(el.offsetParent) {
	    el = el.offsetParent;
	    top += el.offsetTop;
	    left += el.offsetLeft;
	  }

	  return (
	    top < (window.pageYOffset + window.innerHeight) &&
	    left < (window.pageXOffset + window.innerWidth) &&
	    (top + height) > window.pageYOffset &&
	    (left + width) > window.pageXOffset
	  );
	}

	$(window).on('scroll resize', function(){
		if (elementPartInViewport(document.querySelector('#sport-business-content'))) {
			setTimeout(function(){
				$('#business-graph-line').addClass('animate')
				setTimeout(function(){
					$('#business-graph-arrow').addClass('animate')
				},1500)
			},1000)
		}
	});
	
	

	// Любые табы со структурой .tab-bars+.tab-blocks
	$('.sport-you-tab').on('mouseover', function() {
		let index = $('.sport-you-tab').index(this);
		$('.sport-you-tab-block').removeClass('active');
		$($('.sport-you-tab-block')[index]).addClass('active');
	});

	function elementPartInViewport(el) {
	  var top = el.offsetTop;
	  var left = el.offsetLeft;
	  var width = el.offsetWidth;
	  var height = el.offsetHeight;

	  while(el.offsetParent) {
	    el = el.offsetParent;
	    top += el.offsetTop;
	    left += el.offsetLeft;
	  }

	  return (
	    top < (window.pageYOffset + window.innerHeight) &&
	    left < (window.pageXOffset + window.innerWidth) &&
	    (top + height) > window.pageYOffset &&
	    (left + width) > window.pageXOffset
	  );
	}

    $(window).on('mousemove', function(e) {
		if ( window.innerWidth > 991 && !isMobile() ) {
			var mx = e.pageX;
			var rotateK = 90 / $(window).width();
			var rotateDeg = -(45 - rotateK * mx);
			if (elementInViewport(document.querySelector('.sport-you-tabs'))) {
				$('.element-3d>div').css({ transform: 'rotate3d(0, 1, 0, ' + -rotateDeg + 'deg )'})
			} else {
				$('.element-3d>div').css({ transform: 'rotate3d(0, 1, 0, 0deg )'})
			}
		} else {
			$('.element-3d>div').css({ transform: 'rotate3d(0, 1, 0, 0deg )'})
		}
    });

    $('.toggle-status, .toggle-title').click(function(){
    	let block = $(this).parents('.toggle-block');
    	if (block.hasClass('open')) block.removeClass('open')
    	else {
    		let wrap = $(this).parents('.toggles-wrap')
    		$(wrap).find('.toggle-block').removeClass('open');
    		$(block).addClass('open');
    	}
    })

    $(window).mousemove(function( event ) {
      if ( window.innerWidth > 991 && !isMobile() ) {
      	for (let imageCount = 2; imageCount<=4; imageCount++) {
      		let $el = $(".sport-projects-image-"+imageCount),
      			depth = $el.attr("dataDepth"),
      			x = event.screenX*depth,
      			y = event.screenY*depth,
      			z = imageCount*100;
      		$el.css("transform", "translate3d("+x+"px,"+y+"px,"+z+"px"+")");
      	}
      }
    });



	
});