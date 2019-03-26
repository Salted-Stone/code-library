/* Add this script to the header */
<script src="http://www.hedviginc.com/hubfs/jquery.cookie.js"></script>


<script>
$(window).load(function(){
  // read cookie on page load
  var readCookie = $.cookie('lastCategory');
  var subCategoryClicked = "";

  // on page load click the previous category saved in cookie then remove the cookie
  $('*[data-cat="'+readCookie+'"]').trigger('click');
  $.removeCookie('lastCategory');

  // save catagory name when clicked to cookie
  $('#resourceNav li').click(function(){
    subCategoryClicked = $(this).attr("data-cat");
    $.cookie('lastCategory', subCategoryClicked);
  });
});
</script>
