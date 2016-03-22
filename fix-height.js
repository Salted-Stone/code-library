< script src = "https://cdn.jsdelivr.net/g/slidesjs@3.0.4,handlebarsjs@4.0.5" > < /script>


<script>
  function fixheight(needsReset) {
    var newHeight = 0;

    $('.fix-height').each(function() {
      var that = this;
      /* Variable for later */

      $('> div', that).each(function(index, element) {
        /* Reset the height so that we can get a good calculation */
        $(this).height('auto');
        /* See if this element is taller than the previous one */
        newHeight = ($(this).height() > newHeight) ? $(this).height() : newHeight;
      });
    });

		$('.fix-height').each(function() {
			$(this).height(newHeight);
		});
  }

$(document).ready(function() {
  if ($(window).width() > 600) {
    fixheight();
  }
});

$(window).resize(function() {
  if ($(window).width() > 600) {
    fixheight();
  }
});
</script>

< script src = "{{ get_public_template_url("
custom / page / Saltedstone_Theme / functions.js ") }}" > < /script>
