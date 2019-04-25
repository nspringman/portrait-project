$(document).ready(function(){

       // $('dataTable').append($( "target" ).load( "data.htm" ));


       var scroll_start = 1000;
       var startchange = $('.map-container');
       var offset = startchange.offset();
       $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
              $('.navbar-custom').css('background-color', 'rgba(255,25,25,0.7)');
              // $('.bg-red').css('background-color', 'transparent');
           } else {
              $('.navbar-custom').css('background-color', 'transparent');
              // $('.bg-red').css('background-color', 'rgba(255,25,25,0.5)');
           }
       });

        var fadedIn = false;
        $(window).scroll(function() {
          // console.log("ScrollTop: " + $(window).scrollTop());
          // console.log("Height: " +  $('.map-container').first().outerHeight());
            if ($(window).scrollTop() > $('.letter-col').first().outerHeight() && !fadedIn) {
              $('.focus-nav').first().animate({opacity: 1}, 'fast');
              fadedIn = true;
            } else if ($(window).scrollTop() < $('.letter-col').first().outerHeight() && fadedIn) {
              $('.focus-nav').first().animate({opacity: 0}, 'fast');
              fadedIn = false;
            }
        });
    });
 $("#article-link").click(function(event) {
    event.preventDefault();
     $('html, body').animate({
         scrollTop: $("#article").offset().top
     }, 700);
 });
 $("#letter-link").click(function(event) {
      event.preventDefault();
     $('html, body').animate({
         scrollTop: $("#letter").offset().top
     }, 400);
 });
 $("#data-link").click(function(event) {
      event.preventDefault();
     $('html, body').animate({
         scrollTop: $("#map-target").offset().top
     }, 400);
 });
