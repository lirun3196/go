($(function(){
  //获得焦点时，去除placeholder
  var $this = $(".form-control");
  var holder = $this.attr('placeholder');
  $this.focusin(function(){
    $this.attr({ 'placeholder':''});
  }).focusout(function(){
    $this.attr({ 'placeholder':holder});
  });
})(jQuery));