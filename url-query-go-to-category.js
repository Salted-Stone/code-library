<script>
function goToCategory(){

  // get the query
  var queryString = window.location.search;
  queryString = queryString.substring(1);
  var queryStringSplit = queryString.split('=');
  var categoryName = queryStringSplit[1];

  // go to the category that was queried
  $('#resourceNav [data-cat="'+categoryName+'"]').click();
}

$(window).load(function(){
  goToCategory();
});

$(document).ready(function(){
  goToCategory();

  $('#resourceNav li').click(function(){
    var url = window.location.href.split('.com/');
    var fullPathName = url[3];
    var onlyPathName = fullPathName.split('?');
    history.pushState("", "", "/"+onlyPathName[0]+"?cat="+$(this).data('cat') );
  });
});
</script>
