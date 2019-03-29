function pageProgress() {
	var neutralOffset = $(window).height();
	var percentage =  ( $(document).scrollTop() + neutralOffset )/$(document).height();
	$('#progress-bar').css('width', percentage);
}

$(window).on('scroll', function() {
	pageProgress();
});

// requires <div id="progress-bar"></div> present on page to work. apply other styles where needed
// avoid defining width in css unless you're doing some kind of pre-loading.
// add transition:0.2s to bar for a good time.
