function buttonHide() {
  $('#button-wrapper').slideUp();
}

function userValidate(){
  var x = document.getElementById('user_rsvp_code').value;
  if(x.toLowerCase() == 'yaybaby') {
    $('#yaybaby').remove();
    $('#button-wrapper').slideDown();
  } else if(x.toLowerCase() == 'babyparty') {
    $('#babyparty').remove();
    $('#button-wrapper').slideDown();
  } else {
    $('#rsvp-error').addClass('active');
  }
}