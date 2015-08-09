function startScroll() {
  var banner = document.getElementById("scrolling");

  setInterval(function () {
    var current = banner.getElementsByClassName('active')[0];
    current.classList.remove('active');
    var next = current.nextElementSibling || banner.firstElementChild;
    next.classList.add('active');
  }, 3000);
}