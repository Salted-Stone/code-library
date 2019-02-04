function forceRedraw() {
	$('<style></style>').appendTo($(document.body)).remove();
	$('body').css('overflow', 'hidden').height();
    $('body').css('overflow', 'auto');
}
