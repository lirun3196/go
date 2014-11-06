$(".phone , .email").on("click",function(){
  $(".inputEmail , .inputPhone").hide();
  $(this).next("span").show();
});


