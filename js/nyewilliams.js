$('.film-preview-item').on('click', function ( e ) {
	$( this ).siblings().each( function () {
		$( this ).children('.film-text').hide();
	});
	$(this).children('.film-text').toggle();
	$('.film-text').mouseleave(function() {
		$('.film-text').each( function () {
			$(this).removeAttr( 'style' );
		});
	});

});

$('.modal').on('hidden.bs.modal', function (e) {
	$('.film-text').removeAttr( 'style' );
});



