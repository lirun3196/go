//checkbox点击效果
var check = $(".checkIcon");
check.on("click",function(){
  $(this).toggleClass("checkIconed");
});
//focus+翻牌效果
var i = [1,2,3,4,5,6,7,8,9,10,11,12,13];
$.each(i,function(i){
  $(".input"+i).on("change",function(){
    $(".over"+ i).addClass("over").children("img").show();
  });
});