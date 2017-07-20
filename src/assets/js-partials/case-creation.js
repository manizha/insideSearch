// forward motion on the case creation
$('#cc-1-btn-next').click(function(){
  $('#cc-1').removeClass('is-active');
  $('#cc-2').addClass('is-active');

  $('#cc1Progress').removeClass('is-current');
  $('#cc1Progress').addClass('is-complete');
  $('#cc2Progress').addClass('is-current');
  //when showing cc2Progress, must trigger search there
  Coveo.triggerSearchOnStep2();
});

$('#cc-2-btn-next').click(function(){

  $('#cc-2').removeClass('is-active');
  $('#cc-3').addClass('is-active');

  $('#cc2Progress').removeClass('is-current');
  $('#cc2Progress').addClass('is-complete');
  $('#cc3Progress').addClass('is-current');
});

$('#cc-3-btn-next').click(function(){

  $('#cc-3').removeClass('is-active');
  $('#cc-4').addClass('is-active');

  $('#cc3Progress').removeClass('is-current');
  $('#cc3Progress').addClass('is-complete');
  $('#cc4Progress').addClass('is-current');
});

$('#cc-4-btn-next').click(function(){

  $('#cc-4').removeClass('is-active');
  $('#cc-5').addClass('is-active');

  $('#cc4Progress').removeClass('is-current');
  $('#cc4Progress').addClass('is-complete');
  $('#cc5Progress').addClass('is-complete');
});


$('#cc-2-btn-prev').click(function(){
  $('#cc-2').removeClass('is-active');
  $('#cc-1').addClass('is-active');

  $('#cc1Progress').removeClass('is-complete');
  $('#cc1Progress').addClass('is-current');
  $('#cc2Progress').removeClass('is-current');
});

$('#cc-3-btn-prev').click(function(){
  $('#cc-3').removeClass('is-active');
  $('#cc-2').addClass('is-active');

  $('#cc2Progress').removeClass('is-complete');
  $('#cc2Progress').addClass('is-current');
  $('#cc3Progress').removeClass('is-current');
});

$('#cc-4-btn-prev').click(function(){
  $('#cc-4').removeClass('is-active');
  $('#cc-3').addClass('is-active');

  $('#cc3Progress').removeClass('is-complete');
  $('#cc3Progress').addClass('is-current');
  $('#cc4Progress').removeClass('is-current');
});

$('#cc-5-btn-prev').click(function(){
  $('#cc-5').removeClass('is-active');
  $('#cc-4').addClass('is-active');

  $('#cc4Progress').removeClass('is-complete');
  $('#cc4Progress').addClass('is-current');
  $('#cc5Progress').removeClass('is-current');
});
