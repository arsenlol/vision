$(document).ready(function(){
	
	// Рандомная выдача фото сотрудников
	(function(){
		let all = [],
			prev = [];

		$('.staff-gallery img').each(function(){
			all.push($(this).attr('src'));
		});

		function changeImage(imageContainer) {
			let image = imageContainer.querySelector('img')
		  	setTimeout(function(){
		  		$('.image-random img').each(function(){
		  			prev.push($(this).attr('src'));
		  		})
		  		next = all.filter(function(i) {return prev.indexOf(i) < 0;})
		  		newImageSrc = next[getRandom(next.length)];
		  		animateImageChange(imageContainer,image,newImageSrc);
		  		prev = [];

		  		requestAnimationFrame(function(){changeImage(imageContainer)});
		  	}, 6000)
		}

		function getRandom(max){
			return Math.floor(Math.random() * max);
		}

		function animateImageChange(imageContainer, image, newImageSrc) {
			let newImage = new Image();
			    newImage.src = newImageSrc;
			    $(newImage).hide();
			$(imageContainer).prepend(newImage)
			$(image).stop(true).fadeOut(300, function() {
			        $(this).remove();
			    });
			$(newImage).fadeIn(300);

		}

		changeImage(document.querySelector('#image-random-1'));
		setTimeout(function(){changeImage(document.querySelector('#image-random-2'))}, 3300);

	})()

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

	// Запуск анимаций
	animateIfVisible();
	$(window).on('scroll resize', function(){
		animateIfVisible();
	})
	
	// Анимиация видимых елементов
	function animateIfVisible() {
		var arr = document.getElementsByClassName('animate-once');
		[].forEach.call(arr, function(el){
			if (elementPartInViewport(el)) {
				$(el).addClass('animate');
			}
		})
	}

    $(window).on('mousemove', function(e) {
		if ( window.innerWidth > 991 && !isMobile() ) {
			var mx = e.pageX;
			var rotateK = 90 / $(window).width();
			var rotateDeg = -(45 - rotateK * mx);
			if (elementInViewport(document.querySelector('.tab-bars'))) {
				$('.element-3d>div').css({ transform: 'rotate3d(0, 1, 0, ' + -rotateDeg + 'deg )'})
			} else {
				$('.element-3d>div').css({ transform: 'rotate3d(0, 1, 0, 0deg )'})
			}
		} 
    });


    $('#why-us-carousel').slick({
		fade: true,
		dots: true,
		prevArrow: '<div class="slick-prev"><i></i></div>',
		nextArrow: '<div class="slick-next"><i></i></div>',
		appendArrows: '.carousel-nav',
		appendDots: '.carousel-nav',
		speed: '1000'
		// autoplay: true,
  		// autoplaySpeed: 4000
	});

	// $('.blured-image').hover(function(e){
	// 	$(this).addClass('unblur');
	// }).mouseleave(function(){
	// 	$('unblur').removeClass('unblur');
	// })

	$('#o-nas-why-wrap').mouseover(function(e){
		if ($(e.target).hasClass('st0')) {
			$('.blured-image').removeClass('unblur');
			$(e.target).addClass('unblur');
		} else {
			$('.blured-image').removeClass('unblur');
			$('.front-image').addClass('unblur');
		}
	});

	$('#o-nas-decor-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		draggable: false,
		fade: true,
		autoplay: true,
		pauseOnHover: false
	});

	$('.projects-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: '.projects-nav',
		prevArrow: '<div class="slick-prev"><i></i></div>',
		nextArrow: '<div class="slick-next"><i></i></div>',
		arrows: true,
		dots: false,
		draggable: false,
		fade: true,
		slide: '.projects-el'
	});

	$('.clients-carousel').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		appendDots: '.clients-dots',
		appendArrows: '.clients-arrows',
		prevArrow: '<div class="slick-prev"><i></i></div>',
		nextArrow: '<div class="slick-next"><i></i></div>',
		arrows: true,
		dots: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	$('.clients-feed').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		arrows: false,
		dots: false,
		fade: true,
		autoplay: true,
  		autoplaySpeed: 4000
	});


	$('.awards-carousel').on('init', function() {
		let current = $('.awards-carousel .slick-current').index()
		setAwardStyles(current);
    });

    $('.awards-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    	setAwardStyles(nextSlide);
    });

    function setAwardStyles(current){
		$('.awards-carousel figure').removeClass('prev next visible');
		$($('.awards-carousel figure')[current-1]).addClass('visible')
		$($('.awards-carousel figure')[current+1]).addClass('visible')
		$('.awards-carousel figure').each(function(index, el){
			if (index < current) {
				$(el).addClass('prev cant-touch-this');
			} else if (index > current) {
				$(el).addClass('next cant-touch-this');
			}
		});
    }

	$(document).on('click', '.cant-touch-this', function(e){ 
   		e.preventDefault()
   		return false 
   	});

	let isCurrentAward = false;

   	$(document).on('mousedown', function(e){
   		if (e.target === document.querySelector('.awards-carousel .slick-current img')) {
   			isCurrentAward = true;
   		} else {
   			isCurrentAward = false;
   		}
   	});

   	$('.awards-carousel').magnificPopup({
      type: 'image',
      delegate: 'a',
      gallery:{enabled:true},
      titleSrc: 'title',
      disableOn: function() {
        return isCurrentAward;
      }
    });

	$('.awards-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		appendDots: '.awards-dots',
		appendArrows: '.awards-arrows',
		prevArrow: '<div class="slick-prev"><i></i></div>',
		nextArrow: '<div class="slick-next"><i></i></div>',
		arrows: true,
		centerMode: true,
		dots: true,
		focusOnSelect: true,
		speed: 1000,
		cssEase: 'ease-in-out',
		initialSlide: 1,
		asNavFor: '.awards-captions-carousel',
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        fade: true,
		        speed: 300,
		        cssEase: 'ease',
		        initialSlide: 0
		      }
		    }
		  ]
	});

	$('.awards-captions-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		draggable: false,
		fade: true,
		initialSlide: 1
	})

	
});