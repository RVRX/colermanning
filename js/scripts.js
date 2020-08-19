//Remove navbar on scroll

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

        //
        if (scroll >= 30) {
            // $('.name').removeClass("animate__animated animate__fadeOutUp");
            $('.hero-bottom').addClass("animate__animated animate__fadeOutDown");
        } else {
            $('.hero-bottom').removeClass("animate__animated animate__fadeOutDown");
        }

        // if (scroll >= 10 && scroll < 450) {
        //     document.getElementById("about-anchorpoint").scrollIntoView();
        //     // $('#projects').scrollIntoView();
        //     console.log("Scrolled Into View")
        //     // console.log(document.getElementById("projects").scrollHeight);
        //     // console.log(document.getElementById("projects").scrollTop);
        // }
        //
        // if (scroll >= 900 && scroll < 2000) {
        //     document.getElementById("name").scrollIntoView();
        //     // $('#projects').scrollIntoView();
        //     console.log("Scrolled Into View22")
        //     // console.log(document.getElementById("projects").scrollHeight);
        //     // console.log(document.getElementById("projects").scrollTop);
        // }

    });

})(jQuery);