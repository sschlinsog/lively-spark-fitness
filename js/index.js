$(function() {
  
  $('#intro-movie').on('ended', function() {
    $(this).fadeOut();
    $('#overlay').fadeOut();
  });

  $('#overlay').click(function() {
    $('#intro-movie').stop().fadeOut();
    $(this).fadeOut();
  });
  
});
