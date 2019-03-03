(function($) {
  
    "use strict";
  
/*
|===================
| Ajax Campaign Search
|===================
*/

 
  $('.ch-campaign-search-field').keyup(function(event) {
   
    $(this).attr('autocomplete','off');
    var $button = $(this).parent('.input-group').find('#ch-campaign-search-btn');
    $button.html('<i class="fa fa-spinner fa-spin fa-fw"></i>');
    var searchTerm = $(this).val();

    if (!searchTerm.trim()) {
            $('.ch-campaign-ajax-search-result-inner').fadeOut().html("");
            $button.html('<i class="fa fa-search" aria-hidden="true"></i>');
            return;
        }

    if(searchTerm){
      if(searchTerm.length > 2){
        $.ajax({
          url : ep_home_url+'/wp-admin/admin-ajax.php',
          type:"POST",
          data:{
            'action': 'charitus_ajax_campaign_search',
            'term' : searchTerm
          },
          success:function(result){
            $('.ch-campaign-ajax-search-result-inner').fadeIn().html(result);
            $button.html('<i class="fa fa-search" aria-hidden="true"></i>');
          }
        });
      }
    }
  });

  /* Hide search result on body click */
  $(document).mouseup(function (e){
      var container = $(".ch-campaign-ajax-search-result-inner");
      if ( !container.is(e.target) && container.has(e.target).length === 0 ){
          container.hide();
      }
  });


/*
|===================
| matchHeight 
|===================
*/

    $(function() {
      $('.charitus-donation-causes.charitus-donation-causes-grid .cause-inner').matchHeight();
      $('.charitus-donation-causes.charitus-donation-causes-list .cause-inner').matchHeight();
    });


/*
|===================
| Ajax Give Donation Form Search
|===================
*/

 
  $('.ch-give-donation-form-search-field').keyup(function(event) {
   
    $(this).attr('autocomplete','off');
    var $button = $(this).parent('.input-group').find('#ch-campaign-search-btn');
    $button.html('<i class="fa fa-spinner fa-spin fa-fw"></i>');
    var searchTerm = $(this).val();

    if (!searchTerm.trim()) {
            $('.ch-campaign-ajax-search-result-inner').fadeOut().html("");
            $button.html('<i class="fa fa-search" aria-hidden="true"></i>');
            return;
        }

    if(searchTerm){
      if(searchTerm.length > 2){
        $.ajax({
          url : ep_home_url+'/wp-admin/admin-ajax.php',
          type:"POST",
          data:{
            'action': 'charitus_ajax_give_donation_search',
            'term' : searchTerm
          },
          success:function(result){
            $('.ch-campaign-ajax-search-result-inner').fadeIn().html(result);
            $button.html('<i class="fa fa-search" aria-hidden="true"></i>');
          }
        });
      }
    }
  });

  /* Hide search result on body click */
  $(document).mouseup(function (e){
      var container = $(".ch-campaign-ajax-search-result-inner");
      if ( !container.is(e.target) && container.has(e.target).length === 0 ){
          container.hide();
      }
  });    

    
/*
|===================
| SLIDER Preloader
|===================
*/
    $(window).on('load', function() {
      $('.slider_preloader_status').fadeOut();
      $('.slider_preloader').delay(350).fadeOut('slow');
      $('.header-slider').removeClass("header-slider-preloader");
    })

/*
|===================
| Main SLIDER
|===================
*/
    
    $(window).load(function(){        
      $(".theme-main-slider").each(function() {
          var t = $(this),
              auto          = t.data("autoplay") ? !0 : !1,
              loop          = t.data("loop") ? !0 : !1,
              rtl           = t.data("direction") ? !0 : !1,
              nav           = t.data("navigation") ? !0 : !1,
              pag           = t.data("pagination") ? !0 : !1;
              
          $(this).owlCarousel({
              autoHeight: true,
              items: 1,
              loop: loop,
              autoplay: auto,
              dots: pag,
              nav: nav,
              autoplayTimeout: 7000,
              navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
              animateIn: 'zoomIn',
              animateOut: 'fadeOut',
              autoplayHoverPause: false,
              touchDrag: true,
              mouseDrag: true,
              rtl: rtl
          });

          $(this).on("translate.owl.carousel", function () {
            $(this).find(".owl-item .slide-text > *").removeClass("fadeInUp animated").css("opacity","0");
            $(this).find(".owl-item .slide-img").removeClass("fadeInRight animated").css("opacity","0");
          });          
          $(this).on("translated.owl.carousel", function () {
            $(this).find(".owl-item.active .slide-text > *").addClass("fadeInUp animated").css("opacity","1");
            $(this).find(".owl-item.active .slide-img").addClass("fadeInRight animated").css("opacity","1");
          });
      });
    });


/*
|===================
| Donation cause slider
|===================
*/
    
    $(window).load(function(){        
      $(".charitus-donation-causes-slider").each(function() {
          var t = $(this),
              auto          = t.data("autoplay") ? !0 : !1,
              loop          = t.data("loop") ? !0 : !1,
              rtl           = t.data("direction") ? !0 : !1,
              items         = t.data("items") ? parseInt(t.data("items")) : '',
              desktopsmall  = t.data("desktopsmall") ? parseInt(t.data("desktopsmall")) : '',
              tablet        = t.data("tablet") ? parseInt(t.data("tablet")) : '',
              mobile        = t.data("mobile") ? parseInt(t.data("mobile")) : '',
              nav           = t.data("navigation") ? !0 : !1,
              pag           = t.data("pagination") ? !0 : !1;
              
          $(this).owlCarousel({
              items: items,
              responsiveClass:true,
              responsive:{
                0:{
                  items: mobile,
                },
                479:{
                  items: mobile,
                },
                767:{
                  items: tablet,
                },
                980:{
                  items: desktopsmall,
                },
                1170:{
                  items: items,
                }
              },
              loop: loop,
              rtl: rtl,
              autoplay: auto,
              dots: pag,
              nav: nav,
              autoplayTimeout: 7000,
              navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
              autoplayHoverPause: false,
              touchDrag: true,
              mouseDrag: true,
          });

      });
    });


/*
|===================
| Event slider
|===================
*/
    
    $(window).load(function(){        
      $(".charitus-event-slider").each(function() {
          var t = $(this),
              auto          = t.data("autoplay") ? !0 : !1,
              loop          = t.data("loop") ? !0 : !1,
              rtl           = t.data("direction") ? !0 : !1,
              items         = t.data("items") ? parseInt(t.data("items")) : '',
              desktopsmall  = t.data("desktopsmall") ? parseInt(t.data("desktopsmall")) : '',
              tablet        = t.data("tablet") ? parseInt(t.data("tablet")) : '',
              mobile        = t.data("mobile") ? parseInt(t.data("mobile")) : '',
              nav           = t.data("navigation") ? !0 : !1,
              pag           = t.data("pagination") ? !0 : !1;
              
          $(this).owlCarousel({
              items: items,
              responsiveClass:true,
              responsive:{
                0:{
                  items: mobile,
                },
                479:{
                  items: mobile,
                },
                767:{
                  items: tablet,
                },
                980:{
                  items: desktopsmall,
                },
                1170:{
                  items: items,
                }
              },
              loop: loop,
              rtl: rtl,
              autoplay: auto,
              dots: pag,
              nav: nav,
              autoplayTimeout: 7000,
              navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
              autoplayHoverPause: false,
              touchDrag: true,
              mouseDrag: true,
          });

      });
    });    

    
/*
|=====================
| NAV FIXED ON SCROLL
|=====================
*/
    
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("strict");
        } else {
            $(".nav-scroll").removeClass("strict");
        }
    });
    

/*
|===========
| Gallery LightBox
|===========
*/
        
    if ( $.isFunction($.fn.lightcase) ) {
      $('a[data-rel^=lightcase]').lightcase();
    }
    

/*
|====================
| Mobile NAv trigger
|====================
*/
  
      $('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.ch-mobile-menu-location',
      });
          var win = $(window);
          var headerArea = $('.site-header.navbar ');
          var header3 = $('.site-header.navbar ');
          var stick = 'ch-stick';
          var stick2 = 'ch-stick-2';
  	
          win.on('scroll',function() {    
             var scroll = win.scrollTop();
             if (scroll < 245) {
              headerArea.removeClass(stick);
             }else{
              headerArea.addClass(stick);
             }
          });
          win.on('scroll',function() {    
             var scroll = win.scrollTop();
             if (scroll < 100) {
              header3.removeClass(stick2);
             }else{
              header3.addClass(stick2);
             }
      });
      
      $('.charitus-navigation ul.nav li.dropdown').hover(function() {
        $(this).children('.dropdown-menu').stop(true, true).delay(200).fadeIn(400);
      }, function() {
        $(this).children('.dropdown-menu').stop(true, true).delay(200).fadeOut(400);
      });

      $('.charitus-navigation ul.nav li.dropdown-submenu').hover(function() {
        $(this).children('.dropdown-menu').stop(true, true).delay(200).fadeIn(400);
      }, function() {
        $(this).children('.dropdown-menu').stop(true, true).delay(200).fadeOut(400);
      });
    
/*
|===================
| PROGRESS BAR
|===================
*/
    
      
    $(".progress-bar").each(function(){
      var width = $(this).text();
      $(this).css("width", width)
        .empty();           
    });



/*
|===================
| Custom CSS class
|===================
*/

    $('.charitable-login-form .button').addClass('btn btn-lg btn-fill');

    $('table').addClass('table table-bordered');


}(jQuery));