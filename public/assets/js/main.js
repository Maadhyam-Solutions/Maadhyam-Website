// Technologies used carousel
var imageDirectory = "assets/images/icon/";

var technologies = [
  { name: "html5", image: "html5.svg" },
  { name: "css", image: "css3.svg" },
  { name: "javascript", image: "javascript.svg" },
  { name: "boostrap", image: "bootstrap.svg" },
  { name: "react", image: "react.svg" },
  { name: "flutter", image: "flutter.svg" },
  { name: "django", image: "django.svg" },
  { name: "python", image: "python.svg" },
  { name: "node", image: "node.svg" },
  { name: "dynamics", image: "dynamics.svg" },
];

var carouselRotation = 360 / technologies.length;

var carouselBody = document.querySelector(".carousel-body-js");

for (var i = 0; i < technologies.length; i++) {
  var imgEl = document.createElement("img");
  imgEl.src = imageDirectory + technologies[i].image;

  var figEl = document.createElement("figure");
  figEl.appendChild(imgEl);

  figEl.classList.add("carousel-item");

  // rotation style
  var rotationStyle =
    "rotateY(" + carouselRotation * i + "deg) translateZ(300px)";

  figEl.style.transform = rotationStyle;

  carouselBody.appendChild(figEl);
}

// responsive menu
var menuButton = document.querySelector("#menu-button-js");
var mobileNav = document.querySelector("#mobile-nav-js");
var closeButton = document.querySelector("#close-button-js");
var navButtons = document.querySelector("#nav-res-js");

menuButton.addEventListener("click", function () {
  mobileNav.classList.remove("hidden");
});

function hideMenu() {
  mobileNav.classList.add("hidden");
}

closeButton.addEventListener("click", hideMenu);

navButtons.addEventListener("click", hideMenu);
