console.log ("Hello world! It's nice to meet you")
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle' && $(window).width() < 640) {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';
      }
}