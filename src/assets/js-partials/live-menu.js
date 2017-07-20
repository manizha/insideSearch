$('.livemenu--mega, #livemenuFeature, #livemenuDiscussion, #livemenuKnowledge, #livemenuTools').hover(function(){
  $('#livemenuFeatureMenu').toggleClass('is-active');
});

$('#livemenuFeature, #livemenuDiscussion, #livemenuKnowledge, #livemenuTools').hover(function(){
  $(this).addClass('is-active');
  if ($('#livemenuFeatureMenu').hasClass('is-active')) {
    $(this).addClass('is-active');
  }
  else {
    $(this).removeClass('is-active');
  }
});
