//jQuery fadein on scroll
/*
    Add this to css file.
    .fadeInBlock {
        opacity:0;
    }
*/


<script>
$(document).ready(function(){
    if ($(window).width() < 767) {
        $('.stages .block').each(function(){
            $(this).addClass("fadeInBlock");
        });
    }
    else {
        $('.stage-row').each(function(){
            $(this).addClass("fadeInBlock");
        });
    }
});

$(window).scroll(function() {
    $('.fadeInBlock').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).animate({'opacity':'1'},1000);
        }
    });
});
</script>
