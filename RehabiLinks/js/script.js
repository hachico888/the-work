$(function(){
  $(".sp-nav").hide();
  $('.menu-trigger').on("click",function(){
    $(this).toggleClass('active');
    $(".sp-nav").slideToggle();
  })
});

$(function() {
  var headerHeight = 170;//固定ヘッダーの高さを入れる
  $('[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHeight; 
    $("html, body").animate({scrollTop:position}, 200, "swing");//200はスクロールの移動スピードです
    return false;
  });
});
