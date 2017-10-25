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
});
