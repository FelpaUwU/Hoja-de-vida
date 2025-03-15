let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}


showSlide(currentSlide);


let currentEducationSlide = 0;
const eduSlides = document.querySelectorAll(".edu-slide");

function showEducationSlide(index) {
    eduSlides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function moveEducationSlide(step) {
    currentEducationSlide += step;
    if (currentEducationSlide >= eduSlides.length) {
        currentEducationSlide = 0;
    } else if (currentEducationSlide < 0) {
        currentEducationSlide = eduSlides.length - 1;
    }
    showEducationSlide(currentEducationSlide);
}


showEducationSlide(currentEducationSlide);

document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth + "%";
    });
});

