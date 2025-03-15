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


$(document).ready(function () {
    let modoOscuro = false; // Estado del modo

    $('#btn-cambiar').click(function () {
        if (!modoOscuro) {
            // Activar Modo Oscuro
            $('body').css('background', '#121212');
            $('.tarjeta').css('background', '#1e1e1e');
            $('.tarjeta').css('color', 'white');
            $('.nombre p, .titulo p, .descripcion p').css('color', 'white');
            $(this).text("Modo Claro");
        } else {
            // Volver al Modo Original
            $('body').css('background', 'white');
            $('.tarjeta').css('background', 'radial-gradient(circle, rgba(0,255,255,1) 0%, rgba(255,0,255,1) 100%)');
            $('.tarjeta').css('color', 'black');
            $('.nombre p, .titulo p, .descripcion p').css('color', 'black');
            $(this).text("Modo Oscuro");
        }
        
        modoOscuro = !modoOscuro; // Alternar estado
    });
});

