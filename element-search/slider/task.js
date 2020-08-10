let leftArrow = document.querySelector('.slider__arrow_prev');
let rightArrow = document.querySelector('.slider__arrow_next');
let slides = document.querySelectorAll('.slider__item');
let dots = document.querySelectorAll('.slider__dot');

let count = 0;

dots[count].classList.add('slider__dot_active');

function hideSlide () {
    slides[count].classList.remove('slider__item_active');
    dots[count].classList.remove('slider__dot_active');
};

function showSlide () {
    slides[count].classList.add('slider__item_active');
    dots[count].classList.add('slider__dot_active');
};

leftArrow.onclick = function () {
    hideSlide();
    count--;  
    if ( count < 0 ) {
       count = slides.length - 1;
    }
    
    showSlide();
};

rightArrow.onclick = function () {
        hideSlide();
        count++;  
        if ( count > slides.length - 1) {
           count = 0;
        }
        
        showSlide();
    };
    
    for ( let i = 0; i < dots.length; i++) {
    dots[i].onclick = function () {
        hideSlide();
        count = i;
        showSlide();
    }
};


