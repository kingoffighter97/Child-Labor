$( document ).ready(function() {
    var width = $('.member').width();
	$('.member').css({'height':width+'px'});
	$(window).resize(function() {
		var width = $('.member').width();
		$('.member').css({'height':width+'px'});
	});
});