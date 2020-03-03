$(document).ready(function() {

  /* ----------| SMOOTH SCROLL |---------- */
  $("a[href*='#']").on("click", function (e) {
    
    /* Prevents default browser handeling */
    e.preventDefault();
    
    /* Animate the scroll */
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 800, "linear");
		
  });
  


  /* ----------| HEADER SECTION |---------- */
  /* +++++| Nav Bar Container |+++++ */
  /* === Nav === */
  /* Sticky Nav */
  $(".js--header-section").waypoint(function(direction) {
    if (direction === "down") {
      $(".js--nav-bar-container").addClass("sticky-nav");
    } else {
      $(".js--nav-bar-container").removeClass("sticky-nav");
    }}, {offset: "-1px;"}
  );

  /* Mobile Nav */
  var $window = $(window);  /* Stores window size */
  getWidths();  /* Gets window size */
  $window.resize(getWidths);  /* Stores window size on resize */

  function getWidths() {
    var browserWidth = $window.width();

    /* When window size is less than 896px */
    if (browserWidth <= 896) {

      /* Reset slideToggle on resize */
      $(".js--mobile-nav-icon").unbind("click");

      /* Nav Menu dropdown */
      $(".js--mobile-nav-icon").click(function () {
        var main_nav = $(".js--main-nav");
        var mobile_icon = $(".js--mobile-nav-icon i");
        main_nav.slideToggle(200);
    
        /* Switch Mobile Nav Icon on toggle */
        if (mobile_icon.hasClass("uil-bars")) {
          mobile_icon.addClass("uil-times");
          mobile_icon.removeClass("uil-bars");
        } else if (mobile_icon.hasClass("uil-times")) {
          mobile_icon.addClass("uil-bars");
          mobile_icon.removeClass("uil-times");
        }
    
        if ($(".js--nav-bar-container").hasClass("nav-bar-container-mobile")) {
          $(".js--nav-bar-container").removeClass("nav-bar-container-mobile");
        } else {
          $(".js--nav-bar-container").addClass("nav-bar-container-mobile");
        }
      });

      /* When window size is more than 896px */
    } else if (browserWidth > 896) {
      $(".js--mobile-nav-icon").unbind("slideToggle");
      $(".js--nav-menu").css("display", "block");
    }
    
  }



  /* ----------| ABOUT US SECTION | VALUES |---------- */
  /* +++++| Social Lists Cards Container |+++++ */
  /* === Glider Container === */
  new Glider(document.querySelector(".glider"), {

    /* Smartphones */
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    scrollLockDelay: 100,
    draggable: true,
    dots: ".dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next"
    }, responsive: [{

      /* Tablets */
      breakpoint: 629,
      settings: {slidesToShow: 2}
    },{

      /* Desktops */
      breakpoint: 1024,
      settings: {slidesToShow: 3}
    }]
  });

});
