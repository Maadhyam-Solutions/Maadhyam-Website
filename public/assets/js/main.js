// Technologies used carousel
var imageDirectory = "assets/images/icon/";

var technologies = [
    {name: "html5", image: "html5.svg"},
    {name: "css", image: "css3.svg"},
    {name: "javascript", image: "javascript.svg"},
    {name: "boostrap", image: "bootstrap.svg"},
    {name: "react", image: "react.svg"}
]

var carouselRotation = 360/technologies.length

var carouselBody = document.querySelector(".carousel-body");

for (var i = 0; i < technologies.length; i++) {
    var imgEl = document.createElement("img");
    imgEl.src = imageDirectory + technologies[i].image;

    var figEl = document.createElement("figure");
    figEl.appendChild(imgEl);

    figEl.classList.add("carousel-item");

    // rotation style
    var rotationStyle = "rotateY(" + (carouselRotation * i) + "deg) translateZ(300px)";

    figEl.style.transform = rotationStyle;

    carouselBody.appendChild(figEl);
}