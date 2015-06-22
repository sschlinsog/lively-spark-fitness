$(function() {
  
  $('#intro-movie').on('ended', function() {
    $(this).fadeOut();
    $('#overlay').fadeOut();
  });
  
});