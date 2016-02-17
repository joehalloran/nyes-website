$(function () {
	// this script uses '.film-text-show' to control visibility of film text (see css file style.css)
	var $allFilmBoxes =	$('.film-preview-item'); //get all film boxes
	$allFilmBoxes.on('click', function ( e ) {
		var $this = $( this );
		$this.siblings().each( function () {
			$( this ).removeClass('film-text-show'); //hide any other boxes that are visible
		});
		$this.toggleClass('film-text-show'); //show if hidden or vice versa.
	});
	$allFilmBoxes.mouseleave(function() { //safety function to ensure mousehover doesn't conflict with click
		$allFilmBoxes.each( function () { 
			$(this).removeClass('film-text-show'); //hide all if mouse leaves any
		});
	});
});

