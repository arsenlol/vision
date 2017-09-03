
$(document).ready(function(){

	$('.blogpost-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		autoplaySpeed:5000,
		autoplay: true,
		infinite:false,
		appendArrows: '.blogpost-carousel-nav',
		prevArrow: '<div class="slick-prev"><i></i></div>',
		nextArrow: '<div class="slick-next"><i></i></div>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			}
		]
	});

	$('.blogpost-other-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		autoplay: true,
		appendArrows: '.blogpost-other-nav',
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
		      breakpoint: 768,
		      settings: {
		      	slidesToShow: 1,
		      }
		    }

		  ]
	});

	$('.blogpost-carousel-wrap').magnificPopup({
	    delegate: 'a',
	    type: 'image',
	    gallery: {
	      enabled:true,
	      preload: [1,2]
	    }
	});

	$('.blogpost-page-text-footer .subscribe a').magnificPopup({
	  type:'inline',
	  midClick: true
	});

});


