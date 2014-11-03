
//checkbox点击效果
var check = $(".checkIcon");
check.on("click",function(){
  $(this).toggleClass("checkIconed");
});
$(".dmmj").on("click",function(){
  $(".desc").hide();
  $(".bg-show").css("background-image","url('img/bg-dmmj.png')");
});
$(".jhgl").on("click",function(){
  $(".desc").hide();
  $(".bg-show").css("background-image","url('img/bg-jhgl.png')");
});
$(".gywm").on("click",function(){
  $(".desc").hide();
  $(".bg-show").css("background-image","url('img/bg-gywm.png')");
});
$(".yxzt").on("click",function(){
  $(".desc").hide();
  $(".bg-show").css("background-image","url('img/bg-yxzt.png')");
});
$(".jnmj").on("click",function(){
  $(".desc").hide();
  $(".bg-show").css("background-image","url('img/bg-jnmj.png')");
});
$('input').popover('toggle');


