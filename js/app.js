// JQUERY CONTROLLER
$(function() {

    $window = $(window);

    $(".content_wrapper.scroll").scroll(function(){
      if ($(this).scrollTop() > 50) {
        $('#logo').addClass("hide");
      } else {
        $('#logo').removeClass("hide");
      }
    });

    //IMAGE LIQUID
    $(".lqd").imgLiquid();

    // NAVBAR MENU
    $("#nav_bar").click(function() {
      if ($("body").hasClass("nav_menu_show")) {
        $("body").removeClass("nav_menu_show");
        $("body").addClass("nav_menu_closing").delay(1000).queue(function() {
            $(this).removeClass("nav_menu_closing").dequeue();
            $(this).addClass("nav_menu_hide").dequeue();
            $(this).removeClass("nav_menu_show").dequeue();
        });
      }
      else {
        $("body").removeClass("nav_menu_hide");
        $("body").addClass("nav_menu_opening").delay(1000).queue(function() {
            $(this).removeClass("nav_menu_opening").dequeue();
            $(this).addClass("nav_menu_show").dequeue();
        });
        return false;
      }
    });

    // FOOTER MENU
    $(document).on('click', '.footer-menu__button', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        $('.footer-menu__items').toggleClass('is-active');
    });

    $(document).on('click', function(evt) {
        if (!$(evt.target).closest('.footer-menu__items').length) {
            $('.footer-menu__items').removeClass('is-active');
        }
    });

    $(document).on('keydown', function(evt) {
        var dropdown;
        var evt = evt || $(window).event;
        dropdown = $('.footer-menu__items');
        if (evt.keyCode === 27) {
            dropdown.removeClass('is-active');
        }
    });
});

