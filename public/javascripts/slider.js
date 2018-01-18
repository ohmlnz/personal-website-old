$(document).ready(function() {

	$('#portfolio ul').css('display', 'block');

	$('.slider').slick({
	  dots: false,
	  arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 7000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
});
