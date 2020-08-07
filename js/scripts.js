//https://stackoverflow.com/a/54164631
// ^ Credit

// document ready
(function ($) {

    // scroll functions
    $(window).scroll(function(e) {

        // add/remove class to navbar when scrolling to hide/show
        var scroll = $(window).scrollTop();
        if (scroll >= 450) {
            $('.navbar').addClass("navbar-hide");
        } else {
            $('.navbar').removeClass("navbar-hide");
        }

    });

})(jQuery);