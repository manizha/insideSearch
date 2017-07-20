$('#mobileListDropdown').change(function() {
  var tab = $($(this).val());
  console.log(tab);
  $('#case-list-tabs').foundation('selectTab', tab);
});
