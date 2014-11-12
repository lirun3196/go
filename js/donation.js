$('a[href="#ranklist"],a[href="#myDonate"]').on("click",function(){
  $(".section.donate-record").toggleClass("hiddenRecord");
});
 //捐赠轮播
var donateC = new Swiper('.donate-container',{
  pagination: '.pagination',
  paginationClickable: true,
  loop: true,
  autoplay: true,
  speed: 5000,
  calculateHeight: true
});