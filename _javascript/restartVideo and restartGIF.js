<script>
function restartVideo(){
  $(".vp-video").get(0).currentTime = 0;
}

function restartGIF(){
  $('.vp-gif img').each(function(){
    var imageURL = $(this).attr('src'); // get source of image
    $(this).attr('src', ''); // remove the url
    $(this).attr('src', imageURL); // add it back
  });
}
</script>
