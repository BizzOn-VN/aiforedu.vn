jQuery(document).ready(function ($) {
 
  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.gettoggle();
      App.Site.scrolltoTop();
      App.Site.semanticUI();
      App.Site.fancybox();
      App.Site.scrolltoDiv();
  });

  //--All site
    App.Site = function(){

        var gettoggle = function(){
            $(".page-header .toggle-menu").click(function(){
                $(".page-header .main-menu").addClass("active");
            });
            $(".page-header .md-button").click(function(){
                $(".page-header .main-menu").removeClass("active");
            });
            $(".page-header .main-menu ul li a").click(function(){
                $(".page-header .main-menu").removeClass("active");
            });
        }

        var scrolltoTop = function(){
            $(window).scroll(function(){
                if ($(window).scrollTop() >= 60) {
                    $('.page-header').addClass('scroll-top');
                }
                else {
                    $('.page-header').removeClass('scroll-top');
                }                 
            });
        }



        var semanticUI = function(){
            $('.ui.dropdown')
              .dropdown()
            ;
            new WOW().init();
        }
        var fancybox = function(){
            // $("#md-tk").fancybox().trigger('click');
        }
        var scrolltoDiv = function(){
            $(".scl-sc-1").click(function() {
                $('html, body').animate({
                    scrollTop: $(".section-1").offset().top - 80
                }, 1000);
            });
            $(".scl-sc-2").click(function() {
                $('html, body').animate({
                    scrollTop: $(".section-2").offset().top - 80
                }, 1000);
            });
            $(".scl-sc-4").click(function() {
                $('html, body').animate({
                    scrollTop: $(".section-3").offset().top - 80
                }, 1000);
            });
            $(".scl-sc-5").click(function() {
                $('html, body').animate({
                    scrollTop: $(".section-4").offset().top - 80
                }, 1000);
            });
            $(".scl-sc-6").click(function() {
                $('html, body').animate({
                    scrollTop: $(".section-1").offset().top - 80
                }, 1000);
            });
        }

        return{
            gettoggle:gettoggle,
            scrolltoTop:scrolltoTop,
            semanticUI:semanticUI,
            fancybox:fancybox,
            scrolltoDiv:scrolltoDiv,
        };

    }(); 

  //--End All site


    
   
});    


