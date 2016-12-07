var numberOfSlides = 6;
function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(window).scroll(function() {
   if( $(window).scrollTop() = 0 ){
      $('.faq-pagination a').removeClass('active');
      $('.faq-pagination a:nth-child(1)').addClass('active');
   }
   for(i = 1; i <= numberOfSlides; i++){
      var target = $('#row'+i);
      if( isScrolledIntoView(target) ){
         $('.faq-pagination a').removeClass('active');
         $('.faq-pagination a:nth-child('+i+')').addClass('active');
      }
   }
});
