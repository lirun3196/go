$(".phone , .email").on("click",function(){
  $(".inputEmail , .inputPhone").hide();
  $(this).next("span").show();
});
$(".btn").on("click",function(){
  var e = $(".inputEmail").css("display");
  var p = $(".inputPhone").css("display");
  var i = "inline";
  if(e === i){
    $("html").load("byemail.html",function(){
      // $(this).fadeOut(300).fadeIn(300);
    });
  };
if(p === i){
    $("html").load("byphone.html",function(){
      // $(this).fadeOut(300).fadeIn(300);
    });
  };
});
$(".send-btn , .input-group-addon").on("click",function(){
  $("html").load("findPass3.html",function(){
//    $(this).fadeOut(300).fadeIn(300);
});
});
