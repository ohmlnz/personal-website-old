$(document).ready(function() {
	$('.menu-mobile li').on("click", function() {
		const visi = $('.menu-mobile li:not(:first-child)').css("visibility");
		
		if (visi === 'hidden') {
			$('.menu-mobile li:not(:first-child)').css({"visibility": "visible"});
		} else {
			$('.menu-mobile li:not(:first-child)').css({"visibility": "hidden"});
		}
	})
})