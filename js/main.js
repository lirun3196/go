+function ($){
   // 探测.content高度，以决定.left,.menu的高度
    var h = $(".right").height();
    parseInt(h) > 1580 ? $(".left , .menu").height(h) : $(".left , .menu").height(1580);
    // 内容板块hover效果
    var sec=$(".section-item");
    sec.each(function(){
      $(this).hover(function(){
        $(this).children('.action').toggleClass('actioned');
      });
    });
    // 探测屏幕宽度，以隐藏/显示.left类
    var screenW = $(window).width();
    var contentW = 1530;
    if(contentW > screenW){
      $(".left").animate({
        width: 0
        }, 800 );
    }else{
      $(".wraper,.footer").css("min-width","1530px");
    };
    // "换一组"
    $(".change").on("click",function(){
      $(this).parent().prevAll(".section-items").toggleClass("show-item");
    });
    // 中部导航hover效果
    var i = $(".nav-center a");
    var c = $(".center-active");
    c.prev("img").addClass("show-img");
    i.hover(function(event){
      event.stopPropagation();
      c.prev("img").toggleClass("show-img");
      $(this).prev("img").toggleClass("show-img");
    });
    //广告
//    var mySwiper = new Swiper('.swiper-container',{
//      //pagination: '.pagination',
//      //paginationClickable: true,
//      loop: true,
//      autoplay: true,
//      speed: 3000,
//      calculateHeight: true
//    });
    //checkbox点击效果
    var check = $(".checkIcon");
    check.on("click",function(){
      $(this).toggleClass("checkIconed");
    });
    //点击→轮播
//    $(".rightArrow, .leftArrow").on("click",function(){
//      var crousel = $(".crouselContent");
//      var off = crousel.css("left");
//      if(parseInt(off) === 0){
//        crousel.animate({
//          left:"-695px"
//        },300,"linear");
//      }else{
//        crousel.animate({
//          left:"0px"
//        },300,"linear");
//      }
//    });
}(jQuery);
/*var main = {
  onReady:function(){
    var h = $(".right").height();
    parseInt(h) > 1580 ? $(".left , .menu").height(h) : $(".left , .menu").height(1580);
  },
  secHover:function(){
    // 内容板块hover效果
    var sec=$(".section-item");
    sec.each(function(){
      $(this).hover(function(){
        $(this).children('.action').toggleClass('actioned');
      });
    });
  },
  detectW:function(){
    // 探测屏幕宽度，以隐藏/显示.left类
    var screenW = $(window).width();
    var contentW = 1530;
    if(contentW > screenW){
      $(".left").width(0);
    }else{
      $(".wraper,.footer").css("min-width","1530px");
    };
  },
  nextG:function(){
    // "换一组"
    $(".change").on("click",function(){
      $(this).parent().prevAll(".section-items").toggleClass("show-item");
    });
  },
  navCenter:function(){
    // 中部导航hover效果
    var i = $(".nav-center a");
    var c = $(".center-active");
    c.prev("img").addClass("show-img");
    i.hover(function(event){
      event.stopPropagation();
      c.prev("img").toggleClass("show-img");
      $(this).prev("img").toggleClass("show-img");
    });
  },
  myBox:function(){
    //checkbox点击效果
    var check = $(".checkIcon");
    check.on("click",function(){
      $(this).toggleClass("checkIconed");
    });
  }
};*/


