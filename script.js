// JavaScript source code
var navLinks = document.querySelectorAll(".nav-link");
var projSlides = document.querySelectorAll("#project_slide button");


for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", handleHover);
}

for (var i = 0; i < projSlides.length; i++) {
    projSlides[i].addEventListener("click", handleClick);
    projSlides[i].addEventListener("keydown", function (event) {
        if (event.keyCode == '37' || event.keyCode == '39') {
            handleClick();
        }
    });
}

function handleHover() {
    var audio = new Audio("sounds/hover.wav");
    audio.play();
}

function handleClick() {
    var audio1 = new Audio("sounds/slide.wav");
    audio1.play();
}

