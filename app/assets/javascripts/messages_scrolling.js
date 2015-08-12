function startScroll() {
  var slides = [];
  var count;
  $("#scrolling ul li").each(function () {
    slides.push($(this).text())
  });
  var maxCount = slides.length;
  
  function marginShift() {
    count = 1;
    while (count < maxCount) {
      var marginChange = count * 100;
      var x = "-" + marginChange.toString() + "%";
      $("#scrolling ul").animate({
        marginLeft: x,
      }, 4000).delay(1000);
      count++;
    }
  }
  
  for(i=0; i < 5; i++) {
    marginShift();
    $("#scrolling ul").animate({
      marginLeft: 0,
    }, 4000).delay(1000);    
  }
}