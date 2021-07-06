window.onscroll = function() {
  if (window.pageYOffset) {
      document.getElementById('navbar-content').style.padding = '10px 0';
      document.getElementById('navbar-content').style.transition = '0.6s';
      document.getElementById('hexagon').style.transform = 'scale(0.3, 0)';
      document.getElementById('hexagon').style.transition = '0.6s';
      document.getElementsByClassName("selected")[0].classList.add("onscroll")
  } else {
      document.getElementById('navbar-content').style.padding = '40px 0';
      document.getElementById('hexagon').style.transform = 'scale(1, 1)';
      document.getElementsByClassName("selected")[0].classList.remove("onscroll")
  }
}