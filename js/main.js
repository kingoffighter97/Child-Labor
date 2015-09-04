$( document ).ready(function() {

	// Make the images has same width and height
    var width = $('.member').width();
	$('.member').css({'height':width+'px'});
	$(window).resize(function() {
		var width = $('.member').width();
		$('.member').css({'height':width+'px'});
	});

});