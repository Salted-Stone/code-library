function checkProportion(needsCheck) {
    $('img').each(function() {

        var checkThis = this;

		if ( $(checkThis).width() > $(checkThis).height() ) {
			$(checkThis).addClass('wider');
		} else {
			$(checkThis).addClass('taller');
		}

	});
}
