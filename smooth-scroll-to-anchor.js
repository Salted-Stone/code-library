$('a[href*=#]').on('click', function(event){
    event.preventDefault();

    var href = $(this).attr('href');

    // if the href contains url pathname
    if (href.indexOf(location.pathname) >= 0){
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    }
    // if they are different, go to that page.
    else {
        window.location.href = href;
    }
});
