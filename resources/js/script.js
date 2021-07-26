
/* Sticky navbar */

window.onscroll = function() {addStickyNav()}

var navbar = document.getElementById("myNav");

var features = document.getElementsByClassName("js--section-features");

var sticky = features[0].offsetTop - 60;

function addStickyNav() {
    if (window.pageYOffset >= sticky)
    {
        navbar.classList.add("sticky");
    }
    else
    {
        navbar.classList.remove("sticky");
    }
}


/* Smooth scrolling */

const links = document.querySelectorAll(".page-header a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


/* Mobile nav */

function openNav() {
  var x = document.getElementById("mainNav");
  var ico = document.getElementById("mobNavIco")
  
  if (x.className === "main-nav") {
    x.className += " responsive";
  } else {
    x.className = "main-nav";
  }

  if (ico.classList.contains("ion-navicon-round")) {
    ico.className = "ion-close-round"
  } else {
    ico.className = "ion-navicon-round"
  }
}