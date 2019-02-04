<script src="http://cdn2.hubspot.net/hubfs/79614/js/jquery.slides.min.js"></script>


<script>
function resizeOfferSlides(){
  $('.rcs-slider .slidesjs-container').attr('style', 'height: '+$(".rcs-slider .content").outerHeight()+'px !important');
  //$('.rcs-slider .slidesjs-control').attr('style', 'height: '+$(".rcs-slider .content").outerHeight()+'px !important');
}
$(document).ready(function(){

  $(".rcs-slider").slidesjs({
    //width: 700,
    //height: 393,
    play: {
          effect: "fade", // [string] Can be either "slide" or "fade".
          interval: 5000, // [number] Time spent on each slide in milliseconds.
          auto: true, // [boolean] Start playing the slideshow on load.
          pauseOnHover: false, // [boolean] pause a playing slideshow on hover
          restartDelay: 2500 // [number] restart delay on inactive slideshow
        },
    callback: {
      // Passes start slide number
      loaded: function(number) {  resizeOfferSlides(); },
      // Passes start slide number
      complete: function(number) {  resizeOfferSlides(); }
    }//end callback
  });

});
$(window).resize(function() {
  resizeOfferSlides();
});
</script>
