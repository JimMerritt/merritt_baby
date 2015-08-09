function validateBoy() {
  if(document.getElementById("guest_boy_boy").checked) {
    document.getElementById("guest_girl_girl").checked = false; 
  }
}

function validateGirl() {
  if(document.getElementById("guest_girl_girl").checked) {
    document.getElementById("guest_boy_boy").checked = false; 
  }
}