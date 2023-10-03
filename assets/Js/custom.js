$(document).ready(function () {

    // cart_drawer js start here 
    $('body').on('click', '.cart_drawer', function () {
        $(".mini-cart").addClass("active");
        $("body").addClass("overflow-hidden");
    });
    $('body').on('click', '.cart_colse_icon, .overlay', function (e) {
        $(".mini-cart").removeClass("active");
        $("body").removeClass("overflow-hidden");
    });

    // cart_drawer js end here 
    // search input start here
    $('.search').click(function () {
        $('.search_form').slideDown("3000");
        $('.main_search_box input').focus();
    });
    $('.close_search').click(function () {
        $('.search_form').slideUp("3000");
    });
    // search input end here

    // announcement-bar start here
    $("body").on("click", ".announcement-bar .close-icon", function (e) {
        $(".announcement-bar").slideUp();
        setTimeout(function () {
            headerspace();
        }, 400);
    });
    // announcement-bar end here

    // hero_slider start here
    var swiper = new Swiper(".hero_slider", {
        slidesPerView: 1,
        draggable: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
    // hero_slider end here

    // slider moblie 992 strat here
    'use strict';
    const breakpoint1 = window.matchMedia('(min-width:992px)');
    let myswiper;
    const breakpointChecker1 = function () {
        if (breakpoint1.matches === true) {
            if (myswiper !== undefined) myswiper.destroy(true, true);
            return;
        } else if (breakpoint1.matches === false) {
            return enableSwiper1();
        }
    };
    const enableSwiper1 = function () {
        // pro_fitting_slider start here
        myswiper = new Swiper('.pro_fitting_slider', {
            slidesPerView: 1.5,
            autoHeight: true,
            loop: false,
            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 0
                }
            },
        });
        // pro_fitting_slider end here

        // del-slider-main start here
        myswiper = new Swiper('.del-slider-main', {
            slidesPerView: 1.2,
            autoHeight: true,
            loop: false,

            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 0
                }
            },
        });
        // del-slider-main end here
    };

    breakpoint1.addListener(breakpointChecker1);
    breakpointChecker1();

    // slider moblie 992 strat here 

    // home-brand-slider start here
    var Swipertwo = new Swiper('.home-brand-slider', {
        slidesPerView: 2.7,
        autoHeight: true,
        loop: false,
        breakpoints: {
            991: {
                slidesPerView: 7,
                centeredSlides: false
            }
        },
    });
    // home-brand-slider end here

    //  faq accordion start here
    $('.accordion_title').click(function () {
        $('.accordion_title').removeClass('active');
        $('.accordion_content_wp').slideUp();
        if (!$(this).next().is(':visible')) {
            $(this).next().slideDown();
            $(this).addClass('active');
        }
    });
    //  faq accordion end here

    $('.col_variation_box').click(function () {
        $(this).toggleClass("active");
    });

    // pagination start here
    $('.pagination li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // pagination end here 

    // mob_toggle start here 
    $(".mob_toggle").on("click", function (e) {
        e.preventDefault();
        $(".mobile-menu, body").addClass("active-menu");
    });
    $(".menu-overlay, .close-menu").on("click", function () {
        $(".mobile-menu, body").removeClass("active-menu");
        $('.cm-menu-inner').find('.has-children').removeClass('is-open');
    });

    $('.acnav__label').click(function () {
        var label = $(this);
        var parent = label.parent('.has-children');
        if (parent.hasClass('is-open')) {
            parent.removeClass('is-open');
        } else {
            parent.addClass('is-open');
        }
    });
    $('.back-menu').click(function () {
        $(this).parent().parent().parent().removeClass('is-open')
    });
    // mob_toggle end here 

    // footer menu faq start here 
    $(() => {
        const win = $(window);
        win.on("load resize", () => {
            if (jQuery(window).width() < 767) {
                $('.ft-menu-item .acnav__label').click(function () {
                    console.log("zfhhhhh")
                    $('.ft-menu-item .acnav__label').removeClass('active');
                    $('.ft-menu-item .acnav__list').slideUp();
                    if (!$(this).next().is(':visible')) {
                        $(this).next().slideDown();
                        $(this).addClass('active');
                    }
                });
            }
        });
    });

    // footer menu faq enkd here


    // collection filter accordion start here

    $('body').on('click', '.filter_heading', function () {
        $(this).parent().find('.filter_heading').removeClass('active');
        $(this).parent().find('.filter_content_wp').slideUp();
        if (!$(this).next().is(':visible')) {
            $(this).next().slideDown();
            $(this).addClass('active');
        }
    });

    // collection filter accordion end here

    // collection-filter-js-start-here

    $("body").on("click", ".col_filter_wp", function () {
        $(".coll_filter, .menu-overlay , body").addClass("active_filter");
        $("body").addClass("overflow-hidden");
        if (jQuery(window).width() > 767) {
            $(".coll_filter").toggleClass("hide-filter");
            $("body").removeClass("overflow-hidden");
        }
    });
    $(".close_filter, .menu-overlay").on("click", function () {
        $(".coll_filter,.menu-overlay , body").removeClass("active_filter");
        $("body").removeClass("overflow-hidden");
    });
    // collection-filter-js-end-here

    // pdp slider start here
    var swiper = new Swiper(".pdp_thumb_slider", {
        spaceBetween: 30,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            768: {
                direction: 'vertical',
            }
        },
    });
    var swiper2 = new Swiper(".pdp_main_slider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        thumbs: {
            swiper: swiper,
        },
    });
    // pdp slider end here

    // slider moblie 768 strat here
    'use strict';
    const breakpoint = window.matchMedia('(min-width:768px)');
    let swiperfor;
    const breakpointChecker = function () {
        if (breakpoint.matches === true) {
            if (swiperfor !== undefined) swiperfor.destroy(true, true);
            return;
        } else if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };
    const enableSwiper = function () {
        swiperfor = new Swiper(".products_viewed_slider, .typeof_flooring_slider", {
            slidesPerView: 1.5,
            autoHeight: true,
            loop: false
        });
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();


    // slider moblie 768 strat here

    // order time start here
    function currentTime() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let session = "";
        if (hh > 12) {
            session = "";
        }
        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;
        let time = hh + ":" + mm + ":" + ss + " " + session;
        document.getElementById("clock").innerText = time;
        let t = setTimeout(function () { currentTime() }, 1000);
    }
    currentTime();

    // order time end here

    // quntity js start here

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // quntity js end here

    // menu-tab js start here 
    $(".menu-tab-view").each(function () {
        $(this).find(".tab_content").hide();
        $(this).find(".tab_content:first").show();
    });

    /* if in tab mode */
    $(".menu-tabs li").click(function () {
        $(this).closest(".menu-tab-view").find(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(this).closest(".menu-tab-view").find(".menu-tabs li").removeClass("active");
        $(this).addClass("active");
    });

    // menu-tab js start here 

});


