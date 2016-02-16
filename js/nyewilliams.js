$('.film-preview-item').on('click', function ( e ) {
	$( this ).siblings().each( function () {
		$( this ).children('.film-text').hide();
	});
	$(this).children('.film-text').toggle().addClass("film-text-visible");
	$('.film-text-visible').mouseleave(function() {
		$( this ).hide().removeClass("film-text-visible");
	});

});



