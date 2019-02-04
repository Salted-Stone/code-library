<script>
function sortUpcomingEvents(){
  var $divs = $("div.upcoming-event");
  var numericallyOrderedDivs = $divs.sort(function (a, b) {
      //return Date.parse( $(a).find(".event-date").text() ) > Date.parse( $(b).find(".event-date").text() );
      return Date.parse( $(a).find(".event-date").text() ) - Date.parse( $(b).find(".event-date").text() );
  });
  $(".upcoming-container").html(numericallyOrderedDivs);
}

function sortPastEvents(){
  var $divs = $("div.past-event");
  var sortedPastEventList = $divs.sort(function (a, b) {
      return Date.parse( $(a).find(".event-date").text() ) - Date.parse( $(b).find(".event-date").text() ); // oldest first
  });
  $(".past-container").html(sortedPastEventList);
}
</script>
