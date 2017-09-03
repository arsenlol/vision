
$(document).ready(function(){

	$('.projects-main-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		autoplaySpeed:5000,
		autoplay: true,
		adaptiveHeight: true,
		appendArrows: '.projects-main-nav',
		prevArrow: '<div class="slick-nav-block prev"><span>Предидущий проект</span><div class="slick-prev"><i></i></div></div>',
		nextArrow: '<div class="slick-nav-block next"><span>Следующий проект</span><div class="slick-next"><i></i></div></div>'
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
		var arr = document.getElementsByClassName('project');
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
