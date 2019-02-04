$('a[href*=#]').on('click', function(event){
    event.preventDefault();

    var href = $(this).attr('href');

    // if the href contains url pathname
    if (href.indexOf(location.pathname) >= 0){
        $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 500);
    }
    // if the href contains http://
    else if ( href.indexOf("http://") >= 0){
        window.location.href = href;
    }
    else {
      $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 500);
    }
});


// or this

$('a[href*=#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

// if fixed header
$('a[href*=#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 500);
    // 100 being the height of the fixed header
});
