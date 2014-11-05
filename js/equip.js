$(".collect-num , .lapse-num , .promotion-num").on("click",function(){
  $(this).siblings().removeClass("click-c");
  $(this).addClass("click-c");
});
$(".operate-btn").on("click",function(){
  $(".fav-tool-item").css("display","inline-block").animate({
    width:"show"
  },300,"easing");
});