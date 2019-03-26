/*
    This is an example of how to continously check what elemennt has scrolled into view.
    This example has multiple elements that the script will check, hence the "numberOfSlides".
*/

var numberOfSlides = 6;

function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(window).scroll(function() {
    // if user is at the very top of the page
    if( $(window).scrollTop() == 0 ){
        // update the active states accordingly
        // in this case, first child should be active
        $('.faq-pagination a').removeClass('active');
        $('.faq-pagination a:nth-child(1)').addClass('active');
    }
    else{
        // go through each of the slides and check if it is in the viewport
        // if it is, update the active states
        // in this case, the slide that is in view should have the active state
        for(i = 1; i <= numberOfSlides; i++){
            var target = $('#row'+i);
            if( isScrolledIntoView(target) ){
                $('.faq-pagination a').removeClass('active');
                $('.faq-pagination a:nth-child('+i+')').addClass('active');
            }
        }
    }
});
