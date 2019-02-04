<script>
function fixDiv() {
var headerHeight = $('.site-header').height();
var bannerHeight = $('.tier-one-banner').height();

      var $cache = $('.sticky-menu');
      if ($(window).scrollTop() > (headerHeight + bannerHeight - 125))
        $cache.css({
          'position': 'fixed',
          'top': headerHeight,
          'background-color' : '#f8f8f8',
          'width ': '100%',
          'left' : '0',
          'right' : '0',
          'z-index' : '9999'
        });
      else
        $cache.css({
          'position': 'relative',
          'top': 'auto'
        });
}
$(window).scroll(fixDiv);
$(document).ready(function(){
  fixDiv();
 });
</script>

<script>
//Smooth scrolling to anchor ID on same page
        $(function() {
          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
				var navHeight = $('.desktop-nav').height() + $('.sticky-menu').height() - 1;
                $('html,body').animate({
                  scrollTop: target.offset().top - navHeight
                }, 500);
                return false;
              }
            }
          });
        });
</script>
