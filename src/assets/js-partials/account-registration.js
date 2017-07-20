//progress with account registration
$('#ar-1-btn-next').click(function(){
  $('#ar-1').removeClass('is-active');
  $('#ar-2').addClass('is-active');

  $('#ar1Progress').removeClass('is-current');
  $('#ar1Progress').addClass('is-complete');
  $('#ar2Progress').addClass('is-current');
});

$('#ar-2-btn-next').click(function(){
  $('#ar-2').removeClass('is-active');
  $('#ar-3').addClass('is-active');

  $('#ar2Progress').removeClass('is-current');
  $('#ar2Progress').addClass('is-complete');
  $('#ar3Progress').addClass('is-current');
});

$('#ar-3-btn-next').click(function(){
  $('#ar-3').removeClass('is-active');
  $('#ar-4').addClass('is-active');

  $('#ar3Progress').removeClass('is-current');
  $('#ar3Progress').addClass('is-complete');
  $('#ar4Progress').addClass('is-current');
});

$('#ar-4-btn-next').click(function(){
  $('#ar-4').removeClass('is-active');
  $('#ar-5').addClass('is-active');

  $('#ar4Progress').removeClass('is-complete');
  $('#ar4Progress').addClass('is-current');
  $('#ar5Progress').removeClass('is-current');
});
