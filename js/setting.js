var arr = ["setCode","setEmail","setPhone"];
$.each(arr,function(i,val){
  $("#" + val).on("click",function(e){
    e.preventDefault();
    $("html").load(val+".html",function(){
//    $(this).fadeOut(300).fadeIn(300);
    });
  });
});