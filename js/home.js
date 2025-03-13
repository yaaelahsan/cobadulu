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

    // DIGITAL PRODUCTS SLIDE BUTTON
    $("#products_nav").click(function() {
        $("body").addClass("products_show");
    });
    $("#close_products").click(function() {
        $("body").removeClass("products_show");
    });

    // TV PROGRAMS SLIDE BUTTON
    $("#programs_nav").click(function() {
        $("body").addClass("programs_show");
    });
    $("#close_programs").click(function() {
        $("body").removeClass("programs_show");
    });

    // SWIPER LATEST FEEDS
    var slider_feeds = {
            pagination: '.swiper-pagination-latest',
            paginationType: 'fraction',
            direction: 'vertical',
            paginationClickable: true,
            effect: 'fade',
            speed: 600,
            // height: 422,
            nextButton: '.swiper-item-next',
            prevButton: '.swiper-item-prev',
            keyboardControl: true,
            mousewheelControl: true,
            onSlideChangeStart: function(swiper) {
                var i = swiper.activeIndex;
                var j = swiper.previousIndex;
                $("body").addClass("bg"+ i);
                $("body").removeClass("bg"+ j);
            },
            onSlideChangeEnd: function(swiper) {
                var i = swiper.activeIndex;
                var j = swiper.previousIndex;
                $("body").addClass("bg"+ i);
                $("body").removeClass("bg"+ j);
            },
        },
        mySwiper = new Swiper('.swiper-container-feeds', slider_feeds);

    $("#see_all").click(function() {
        $("body").addClass("see_all");
        mySwiper.disableMousewheelControl();
    });
    $("#see_slide").click(function() {
        $("body").removeClass("see_all");
        mySwiper.enableMousewheelControl();
    });
    $( ".tile > a" ).mouseleave(function() {
        $(this).addClass("title_show").delay(300).queue(function(){
            $(this).removeClass("title_show").dequeue();
        });
    });

    // SWIPER DIGITAL PRODUCTS
    var slider_products = {
            pagination: '.swiper-pagination-brand',
            direction: 'vertical',
            paginationClickable: true,
            effect: 'fade',
            speed: 600,
            keyboardControl: true,
            mousewheelControl: true,
            paginationBulletRender: function (swiper, index, className) {
                var titles = [];
                $(".swiper-container-products .swiper-wrapper .swiper-slide").each(function(i) {
                    titles.push($(this).data("title"));
                });
                return '<span class="' + className + '">' + titles[index] + '</span>';
            }
        },
        mySwiper2 = new Swiper('.swiper-container-products', slider_products);

    // SWIPER PROGRAMS
    var slider_programs = {
            pagination: '.swiper-pagination-programs',
            paginationType: 'fraction',
            direction: 'vertical',
            paginationClickable: true,
            effect: 'fade',
            speed: 600,
            keyboardControl: true,
            mousewheelControl: true
        },
        mySwiper3 = new Swiper('.swiper-container-programs', slider_programs);

});