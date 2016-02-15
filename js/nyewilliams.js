$('.film-preview-item').children('a').on('click', function ( e ) {
	e.preventDefault();
	$( this ).parent().siblings().each( function () {
		$( this ).children('.film-text').hide();
	});
	$(this).siblings('.film-text').show().addClass("film-text-visible");
	$('.film-text-visible').mouseleave(function() {
		$( this ).hide().removeClass("film-text-visible");
	});

});

$('.film-text-close').on('click', function ( e ){
	e.preventDefault();
	$( this ).parent().hide();
});

$(window).mousemove(function () {
	$('.film-text-close').hide();
});
