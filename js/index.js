$(function() {
  
  $('#fullscreenvid').click(function() {
    openVideo();
    updateVideo();
  });
  
  $('#intro-movie').on('ended', function() {
    $(this).fadeOut();
    $('#overlay-bg').fadeOut();
  });
  
});


function openVideo() {
  $('#intro-movie').fadeIn();
  $('#overlay-bg').fadeIn();
  $('#intro-movie').get(0).play();
}

function updateVideo() {
  var $videoWindow = $('#intro-movie');
  var top = '50px';
  var left = ($(window).width() - $videoWindow.outerWidth()) / 2;
  $videoWindow.css({
    "top" : top,
    "left" : left
  });
}