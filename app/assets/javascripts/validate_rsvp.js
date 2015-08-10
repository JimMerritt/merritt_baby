function validateCode() {
  var rsvpRaw = document.getElementById('rsvp-check').value;
  var rsvp = rsvpRaw.toLowerCase();
  
  if( rsvp == "yaybaby" ) {
    document.getElementById("user_niestradt_niestradt").checked = true; 
  } else if( rsvp == "babyparty" ) {
    document.getElementById("user_niestradt_merritt").checked = true; 
  } else {
    alert("Incorrect Code");
    return false;  
  }
}