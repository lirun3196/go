$(".form-control").on("focusin focusout",function(){
  $(this).prev(".input-group-addon").toggleClass("change-bc");
});