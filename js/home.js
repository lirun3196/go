+function($){
//checkbox点击效果
var check = $(".checkIcon");
check.on("click",function(){
  $(this).toggleClass("checkIconed");
});
var c = ["dmmj","jhgl","yxzt","gywm","jnmj"];
$.each(c,function(i,v){
  var URL = "url(img/bg-" + v + ".png)";
//  alert(p);
  $("." + v).on("click",function(){
    $(".desc").hide();
    $(".bg-show").css("background-image", URL);
  });
});
}(jQuery);

