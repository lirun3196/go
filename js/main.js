+function ($){
   // 探测高度，以决定.left,.menu的高度
    var h = $(document).height();
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
    var changeC = function(){
      $(".form-control").on("focusin focusout",function(){
        $(this).prev(".input-group-addon").toggleClass("change-bc");
      });
    },
    collected = function(){
      $(".collect , .collected").click(function(){
        $(this).hide().siblings().show();
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
    crou = function(){
      //广告
    var mySwiper = new Swiper('.swiper-container',{
      //pagination: '.pagination',
      //paginationClickable: true,
      loop: true,
      autoplay: true,
      speed: 6000,
      calculateHeight: true
    });
    },
    sign = function(){
      var signDate = new Date();
      var Month = signDate.getMonth()+1;
      var now = signDate.getDate;
      var current = signDate.getFullYear() + "." + Month; 
      $(".current").text(current);
//      var md = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
//        var num = [31,28,31,30,31,30,31,31,30,31,30,31];
//        var s = "";
//      $.each(md,function(i,v){
//        if(parseInt(i) === parseInt(Month))
//        num = parseInt(md[i]);
//      });
//      var days = new Array(num);
//      $.each(days,function(i){
//        s += "<li>" + (i+1) + "</li>";
//      });
//      $(".calendar").html(s);
      $(".onekey").click(function(){
        $(".currentD").removeClass().addClass("unsigned signed");
        $(this).css({"background-color":"#bebebe","cursor":"not-allowed"}).text("签到成功");
      });
    };
    return {
      changeBc:changeC,
      clearP:clearP,
      hiddenT:hiddenT,
      crou:crou,
      sign:sign,
      collected:collected
    };
  })();
}(jQuery);


