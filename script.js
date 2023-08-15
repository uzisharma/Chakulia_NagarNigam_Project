let slideIndex = 1;
showSlides(slideIndex);
carousel();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dashed = document.getElementsByClassName("dashed");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dashed.length; i++) {
        dashed[i].className = dashed[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dashed[slideIndex - 1].className += " active";
}


function carousel() {
    var i;
    var x = document.getElementsByClassName("item");
    let dashed = document.getElementsByClassName("dashed");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    dashed[slideIndex - 1].className += " active";
    setTimeout(carousel, 2000); // Change image every 2 seconds

}


let hamburger = document.querySelector('.ham-menu');
let close = document.querySelector('.close-btn');
let mobileNav = document.querySelector('.mobile-index');


hamburger.addEventListener('click', function () {
    mobileNav.classList.add('open');
});
close.addEventListener('click', function () {
    mobileNav.classList.remove('open');

});



let indexofSlide = 0;
showSlidesnew();

function showSlidesnew() {
    let i;
    let slides = document.getElementsByClassName("highlight-container");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    indexofSlide++;
    if (indexofSlide > slides.length) { indexofSlide = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[indexofSlide - 1].style.display = "block";
    dots[indexofSlide - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}