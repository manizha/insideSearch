$('#expandIcon').click(function(){
  $('.tabs-title.is-active').removeClass('is-active');
  $('[aria-selected="true"]').attr('aria-selected', false);
  $('#expandIcon').addClass('is-hidden');
  $('#collapseIcon').removeClass('is-hidden');
  $('.case-details-left-panel').addClass('is-hidden');
  $('.case-detail-comment-section').addClass('medium-12');
  $('.case-detail-comment-section').removeClass('medium-5');
});

$('#collapseIcon').click(function(){
  $('#expandIcon').removeClass('is-hidden');
  $('#collapseIcon').addClass('is-hidden');
  $('.case-details-left-panel').removeClass('is-hidden');
  $('.case-detail-comment-section').removeClass('medium-12');
  $('.case-detail-comment-section').addClass('medium-5');
});
