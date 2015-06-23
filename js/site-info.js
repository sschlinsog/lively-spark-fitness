$(function() {
  
  var active = 0;
  var list = $('.panel');
  
  list.eq('0').siblings().hide();
  
  $('.fa-arrow-circle-right').bind('click', function() {
    active = active == list.length-1 ? 0 : active + 1;
  });
  
  $('.fa-arrow-circle-left').bind('click', function() {
  active = active == 0 ? list.length-1 : active - 1;
 });


 var getActive = function() {
  return list.eq(active);
 };

 $('.fa-arrow-circle-right,.fa-arrow-circle-left').bind('click', function() {
    getActive().show().siblings().hide();
  });
  
  
  $( '#dl-menu' ).dlmenu({
      animationClasses : { classin : 'dl-animate-in-5', classout : 'dl-animate-out-5' }
  });

  
});