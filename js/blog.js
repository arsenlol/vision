
$(document).ready(function(){

	$('.blog-top-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		speed: 500,
		cssEase: 'linear',
		adaptiveHeight:true,
		appendArrows: '.blog-top-carousel-nav-arrows',
		appendDots: '.blog-top-carousel-nav-dots',
		prevArrow: '<div class="slick-prev"><i></i></div>',
		nextArrow: '<div class="slick-next"><i></i></div>'
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

	// Анимиация появления проектов
	function animateIfVisible() {
		var arr = document.getElementsByClassName('blog-item');
		[].forEach.call(arr, function(el){
			if (elementPartInViewport(el)) {
				$(el).addClass('animate');
			}
		})
	}

	// Запуск анимаций
	animateIfVisible();
	$(window).on('scroll resize', function(){
		animateIfVisible();
	})


});
