$(function() {
  $('.topmenu > ul > li').click(function(e) {
    e.stopPropagation();
    var $el = $('ul',this);
    $('.topmenu > ul > li > ul').not($el).slideUp(0);
    $el.stop(true, true).toggle(0);
  });
  $('.topmenu > ul > li > ul > li').click(function(e) {
    e.stopImmediatePropagation(0);
    $('.topmenu > ul > li > ul').not($el).slideUp(0);
  });
  $('html').click(function(event){
    $('.topmenu > ul > li > ul').slideUp(0);
  });
});
$(function() {
  $('.user > li').click(function(e) {
    e.stopPropagation();
    var $el = $('ul',this);
  
    $el.stop(true, true).toggle(100);
  });
  $('.user > li > ul').click(function(e) {
    e.stopImmediatePropagation(0);

  });
  $('html').click(function(event){
    $('.user > li > ul').slideUp(0);
  });
});
