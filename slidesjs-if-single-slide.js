function checkForSingleSlide(){
    if ( $('.slidesjs-slide').length == 1 ){
    	$('.slidesjs-slide').show();
    	$('.slidesjs-stop').click();
        $('.slidesjs-slide').css('left', '0');
    	$('a.slidesjs-navigation').css('display', 'none');
    	$('.slidesjs-pagination').css('display', 'none');
    }
}
