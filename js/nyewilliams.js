$('.film-preview-item').children('a').on('click', function ( e ) {
	e.preventDefault();
	$( this ).parent().siblings().each( function () {
		$( this ).children('.film-text').hide();
	});
	$(this).siblings('.film-text').toggleClass("film-text-visible").toggle();
	$('.film-text-visible').mouseleave(function() {
		$( this ).hide().removeClass("film-text-visible");
	});

});



