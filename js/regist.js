//翻牌效果+计算积分值
var i=new Array(25);
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
  }); //end of on
});
