$(".phone , .email").on("click",function(){
  $(".inputEmail , .inputPhone").hide();
  $(this).next("span").show();
});
$(".btn").on("click",function(){
  $(".container-fluid").load("findPass2.html #password",function(){
    $(this).fadeOut(300).fadeIn(300);
});
});