$(document).ready(function () {
    new WOW().init();
    $("#remove-ads").click(function () {
        $(".top-nav").fadeOut(500);
    });

    $(".back-to-top").click( function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });

    $(".menuIcon").click(function () {
        $(".main-header .bottom-nav").toggleClass("sideNavFullWidth");
        $(this).toggleClass("change");
    });

    $('#frist-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        lazyLoad: true,
    });

    $('#Products-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        lazyLoad: true,
        responsive:{
            0 : {
                items : 1,
                
            },
            480 : {
                items : 2,

            },
            768 : {
                items : 2,
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    $("#Featured-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        lazyLoad: true,
        responsive:{
            0 : {
                items : 1,
                
            },
            480 : {
                items : 2,

            },
            768 : {
                items : 3,
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
    function hover(card){
        $(card).hover(function () {
            $(this).css({ "border": " 2px solid rgba(41, 171, 226, 1)" });
            $(this).find(".fade-toggle-body").animate({ "opacity": "1", "bottom": "0%" }).css({ "display": "flex" });
            $(this).find("span").css({ "border": "none" });
        }, function () {
            $(this).find(".fade-toggle-body").animate({ "opacity": "0", "bottom": "100%" }).css({ "display": "none" });
            $(this).css({ "border": " 2px solid rgba(41, 171, 226, 0)" });
            $(this).find("span").css({ "border": "2px solid lightgray" });
        });
    }

    hover("#Products-carousel .card");
    hover(".tab-pane .card");
    hover("#Featured-carousel .card");
});

$(window).on("load",function(){
    $(".spinner").fadeOut();
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $(".back-to-top").css({"display":"flex","opacity":"1"});
    } else {
        $(".back-to-top").css({"display":"none","opacity":"0"});
    }
  });