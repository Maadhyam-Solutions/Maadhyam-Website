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

  menuButton.classList.add("hidden");
  closeButton.classList.remove("hidden");
});

function hideMenu() {
  mobileNav.classList.add("hidden");

  menuButton.classList.remove("hidden");
  closeButton.classList.add("hidden");
}

closeButton.addEventListener("click", hideMenu);

navButtons.addEventListener("click", hideMenu);

//email submit button
var emailButton = document.querySelector("#mailsubmit-js");
var full_name = document.querySelector("#inline-full-name");
var subject = document.querySelector("#inline-subject");
var message = document.querySelector("#message");


function submitEmail(e) {
  e.preventDefault();
  var full_name_value = full_name.value;
  var subject_value = subject.value;
  var message_value = message.value.replace(/\n/g, "%0D%0A");
  var link = "mailto:maadhyamsolutions@gmail.com?subject=" + subject_value + "&body=" + message_value + " " + "%0D%0A" + "%0D%0A" + full_name_value;
  window.open(link, "_blank");
  full_name.value = "";
  subject.value = "";
  message.value = "";
}

emailButton.addEventListener("submit", submitEmail);