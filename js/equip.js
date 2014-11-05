$(".collect-num , .lapse-num , .promotion-num").on("click",function(){
  $(this).siblings().removeClass("click-c");
  $(this).addClass("click-c");
});