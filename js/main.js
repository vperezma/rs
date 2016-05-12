
var timeOut;
function scrollToTop() {
  if (document.body.scrollTop!= 0 || document.documentElement.scrollTop!= 0){
    window.scrollBy(0,-10);
    timeOut=setTimeout('scrollToTop()',10);
  }
  else {
  	clearTimeout(timeOut);
  }
}

function scrollToId(id) {
    id = id.replace("link", "");
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}
function test(obj){
$(".navbar-nav>li>a").click(function(e) {
    e.preventDefault();
    var id = obj.id;
   $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        '2000');
});
}
