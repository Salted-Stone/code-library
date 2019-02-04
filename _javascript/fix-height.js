<script>
  function fixheight(needsReset) {
    var newHeight = 0;

    $('.fix-height').each(function() {
      var that = this;
      /* Variable for later */

      $('.fix-item', that).each(function(index, element) {
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
