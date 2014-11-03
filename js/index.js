 $(function(){
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
    c.prev("img").toggleClass("show-img");
    i.hover(function(){
      c.prev("img").toggleClass("show-img");
      $(this).prev("img").toggleClass("show-img");
    });
    //广告
    var mySwiper = new Swiper('.swiper-container',{
      //pagination: '.pagination',
      //paginationClickable: true,
      loop: true,
      autoplay: true,
      speed: 3000,
      calculateHeight: true
    });
});


