$(".share").on("click", function(){
  var shareLink = $(this).data("link");

  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(shareLink).select();
  document.execCommand("copy");
  $temp.remove();

  alert("URL Copied.");
});
