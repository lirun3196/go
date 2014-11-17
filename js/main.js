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
    var i = $(".nav-center").find("li");
    var c = $(".center-active");
    c.parent().addClass("show-img");
    i.hover(function(event){
      event.stopPropagation();
      c.parent().toggleClass("show-img");
      $(this).toggleClass("show-img");
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
  // 旋转图标
    $(".fa-refresh").hover(function(){
      $(this).addClass("fa-spin");
    },function(){
      $(this).removeClass("fa-spin");
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

  feature = (function(){
    var signDate = new Date();
    var Month = signDate.getMonth()+1;
    var now = signDate.getDate;
    var changeC = function(){
      $(".form-control").on("focusin focusout",function(){
        $(this).prev(".input-group-addon").toggleClass("change-bc");
      });
    },
    clearP = function(){
      //获得焦点时，去除placeholder
      var $this = $(".form-control");
      var holder = $this.attr('placeholder');
      $this.focusin(function(){
        $this.attr({ 'placeholder':''});
      }).focusout(function(){
        $this.attr({ 'placeholder':holder});
      });
    },
    hiddenT = function(){
      $('a[href="#Tasking"],a[href="#receiveTask"]').on("click",function(){
        $(".section.mission").toggleClass("hiddenRecord");
      });
    },
    sign = function(){
      var current = signDate.getFullYear() + "." + Month; 
      $(".current").text(current);
      var num = new Array(31);
      var s = "";
      $.each(num,function(i){
        s += "<li>" + i + "</li>";
      });
      $(".calendar").html(s);
      if(i === parseInt(now)){
        
      }
      if(i < parseInt(now)){
        
      }
    };
    return {
      changeBc:changeC,
      clearP:clearP,
      hiddenT:hiddenT,
      sign:sign
    };
  })();
}(jQuery);


