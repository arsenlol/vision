
$(document).ready(function(){

	$('.project-main-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		autoplaySpeed:5000,
		autoplay: true,
		adaptiveHeight: true,
		appendArrows: '.project-main-nav',
		prevArrow: '<div class="slick-nav-block prev"><span>Предидущий проект</span><div class="slick-prev"><i></i></div></div>',
		nextArrow: '<div class="slick-nav-block next"><span>Следующий проект</span><div class="slick-next"><i></i></div></div>'
	});

	// $('.project-carousel').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	dots: false,
	// 	fade: true,
	// 	autoplaySpeed:5000,
	// 	autoplay: true,
	// 	adaptiveHeight: true,
	// 	appendArrows: '.project-carousel-nav',
	// 	prevArrow: '<div class="slick-prev"><i></i></div>',
	// 	nextArrow: '<div class="slick-next"><i></i></div>'
	// });

	$(document).on('beforeChange', '.project-carousel', function(event, slick, currentSlide, nextSlide){
	  let next = $('.project-carousel-el')[nextSlide]
	  let prev = $('.project-carousel-el')[currentSlide]
	  $('.project-carousel-el').removeClass('prev next animate');
	  $(next).addClass('next animate');
	  $(prev).addClass('prev animate');
	  setTimeout(function(){
	  	$(next).removeClass('next animate');
	  	$(prev).removeClass('prev animate');
	  },2500)
	});

	$('.project-carousel-nav>*').on('click',function(){
		let method = $(this).hasClass('slick-prev') ? 'slickPrev' : 'slickNext';
		console.log(method)
		$('.project-carousel').slick(method);
	});
	

	let windowState;
	windowChangeState();
	$(window).on('resize orientationchange', windowChangeState);

	function initProjectCarousel(imagesInSlide){

		let wrapper = $('.project-carousel-wrap');
		let imagesSmall = $('.project-carousel-array img');
		
		// Kill slick if slick-initialized
		if ($('.project-carousel')){
			$('.project-carousel').slick('unslick');
		}

		// Set up new content for carousel
		wrapper.empty();
		let carousel = document.createElement("div");
		carousel.classList.add('project-carousel');
		for (let i = 0; i < imagesSmall.length/imagesInSlide; i++){
			let iteration = i+1;
			let slideContent = imagesSmall.slice(i*imagesInSlide,imagesInSlide*iteration);
			let slide = document.createElement("div");
			slide.classList.add('project-carousel-el');
			carousel.append(slide);
			for (image of slideContent) {
				let picture = document.createElement("a");
				let newImage = $(image).clone();
				let fullImageUrl = $(image).data('full');
				picture.classList.add('project-carousel-picture');
				picture.setAttribute('href', fullImageUrl)
				picture.append(newImage[0]);
				slide.append(picture);
			}
		}
		wrapper.append(carousel);

		// Initialize slick
		$('.project-carousel').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			fade: true,
			autoplay: false,
			speed: 2000,
			responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			      	speed:1000
			      }
			    }
			]
		});
	}

	function windowChangeState(){
		let w = window.innerWidth;
		let newState;
		if (w > 991) newState = 'desktop';
		else if (w <= 991 && w > 768) newState = 'tablet';
		else if (w <= 768) newState = 'mobile';
		if (newState!==windowState) {
			windowState = newState;
			initProjectCarousel(getNumberOfImagesInSlide());
		}
	}
			
	function getNumberOfImagesInSlide(){
		switch(windowState) {
			case 'desktop': return 6
			case 'tablet': return 2
			case 'mobile': return 1
		}
	}

	$('.project-carousel-wrap').magnificPopup({
	    delegate: 'a', // the selector for gallery item
	    type: 'image',
	    gallery: {
	      enabled:true,
	      preload: [1,2]
	    }
	});

	$('.project-similar-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		autoplay: true,
		appendArrows: '.project-similar-nav',
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
	

});


