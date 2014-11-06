// JavaScript Document

//$(".form-control").on("click",function(){
//  $(this).attr("placeholder","");
//});
($(function(){
  //checkbox���Ч��
  var check = $(".checkIcon");
  check.on("click",function(){
    $(this).toggleClass("checkIconed");
  });
  //��ý���ʱ��ȥ��placeholder
  var $this = $(".form-control");
  var holder = $this.attr('placeholder');
  $this.focusin(function(){
    $this.attr({ 'placeholder':''});
  }).focusout(function(){
    $this.attr({ 'placeholder':holder});
  });

$('a[href="#Tasking"],a[href="#receiveTask"]').on("click",function(){
  $(".section.Recomtask").toggleClass("hiddenRecord");
});
})(jQuery));



function show1(){
	$("#Ordinary1").attr("src","img/Ordinary_hover.png");
	}
function out1(){
	$("#Ordinary1").attr("src","img/Ordinary.png");
	}
function show2(){
	$("#Ordinary2").attr("src","img/Ordinary_hover.png");
	}
function out2(){
	$("#Ordinary2").attr("src","img/Ordinary.png");
	}
function show3(){
	$("#Ordinary3").attr("src","img/Ordinary_hover.png");
	}
function out3(){
	$("#Ordinary3").attr("src","img/Ordinary.png");
	}
function show4(){
	$("#Ordinary4").attr("src","img/Ordinary_hover.png");
	}
function out4(){
	$("#Ordinary4").attr("src","img/Ordinary.png");
	}
function show5(){
	$("#Ordinary5").attr("src","img/Ordinary_hover.png");
	}
function out5(){
	$("#Ordinary5").attr("src","img/Ordinary.png");
	}
function show6(){
	$("#Ordinary6").attr("src","img/Ordinary_hover.png");
	}
function out6(){
	$("#Ordinary6").attr("src","img/Ordinary.png");
	}
function showOccupation(){
	$("#media-object_Occupation").attr("src","img/Occupation_hover.png");
	}
function outOccupation(){
	$("#media-object_Occupation").attr("src","img/Occupation.png");
	}
function showOccupation2(){
	$("#media-object_Occupation2").attr("src","img/Occupation_hover.png");
	}
function outOccupation2(){
	$("#media-object_Occupation2").attr("src","img/Occupation.png");
	}
function showHero(){
	$("#media-object_Hero").attr("src","img/Hero_hover.png");
	}
function outHero(){
	$("#media-object_Hero").attr("src","img/Hero.png");
	}
function showHero2(){
	$("#media-object_Hero2").attr("src","img/Hero_hover.png");
	}
function outHero2(){
	$("#media-object_Hero2").attr("src","img/Hero.png");
	}