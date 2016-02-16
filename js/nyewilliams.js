$('.film-preview-item').on('click', function ( e ) {
	$( this ).siblings().each( function () {
		$( this ).children('.film-text').hide().removeAttr('style');
	});
	$(this).children('.film-text').toggle();
	$('.film-preview-item').mouseleave(function() {
		$( '.film-text' ).each( function () { $(this).removeAttr('style');});
	});

});

$('.modal').on('hidden.bs.modal', function (e) {
	$('.film-text').removeAttr( 'style' );
});



