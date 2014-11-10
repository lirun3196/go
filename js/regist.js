//翻牌效果+计算积分值
var i = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
$.each(i,function(i){
  $(".input"+i).on("change",function(){
    var v = $.trim($(this).val());
    var total = $(".total").text();
    var o = $(".over"+ i).hasClass("over");
    if(v){
      if(!o){
        //更改内容后不为空且无over
        $(".over"+ i).addClass("over");
        $(".total").text(parseInt(total) + 5);
      }
    }else{
      if(o){
        //更改内容后为空且已有over类
        $(".over"+ i).removeClass("over");
        $(".total").text(parseInt(total) - 5);
      }
    }
  });
});
