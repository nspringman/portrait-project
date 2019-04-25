$(document).ready(function(){

       // $('dataTable').append($( "target" ).load( "data.htm" ));


       var scroll_start = 1000;
       var startchange = $('#letter');
       var offset = startchange.offset();
       var fadedIn = false;
       $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top && !fadedIn) {
              $('.navbar-custom').css('background-color', 'rgba(255,25,25,0.7)');
              //fadedIn=true;
           } else {
              $('.navbar-custom').css('background-color', 'transparent');
              //fadedIn=false;
           }
       });

        var fadedIn = false;
        $(window).scroll(function() {
          // console.log("ScrollTop: " + $(window).scrollTop());
          // console.log("Height: " +  $('.top-container').outerHeight());
            if ($(window).scrollTop() > $('.top-container').outerHeight()+$('.jumpnav-container').outerHeight() && !fadedIn) {
              $('.focus-nav').first().animate({opacity: 1}, 'fast');
              $(".jump-top-container").css('display', 'block');
              fadedIn = true;
            } else if ($(window).scrollTop() < $('.top-container').outerHeight()+$('.jumpnav-container').outerHeight() && fadedIn) {
              $('.focus-nav').first().animate({opacity: 0}, 'fast');
              $(".jump-top-container").css('display', 'none');
              fadedIn = false;
            }
        });
});

 $("#article-link").click(function(event) {
    event.preventDefault();
     $('html, body').animate({
         scrollTop: $("#article").offset().top - 45
     }, 700);
 });
 $("#letter-link").click(function(event) {
      event.preventDefault();
     $('html, body').animate({
         scrollTop: $("#letter").offset().top - 30
     }, 400);
 });
 $("#data-link").click(function(event) {
      event.preventDefault();
     $('html, body').animate({
         scrollTop: $("#map-target").offset().top - 55
     }, 400);
 });
 $("#article-link-2").click(function(event) {
     event.preventDefault();
      $('html, body').animate({
          scrollTop: $("#article").offset().top - 45
      }, 700);
  });
  $("#letter-link-2").click(function(event) {
       event.preventDefault();
      $('html, body').animate({
          scrollTop: $("#letter").offset().top - 30
      }, 400);
  });
  $("#data-link-2").click(function(event) {
       event.preventDefault();
      $('html, body').animate({
          scrollTop: $("#map-target").offset().top - 45
      }, 400);
  });
 $("#jump-top").click(function(event) {
      event.preventDefault();
     $('html, body').animate({
         scrollTop: $("#head-title").offset().top - 55
     }, 400);
 });
