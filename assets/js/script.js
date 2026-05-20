window.currentSlide = 0;

window.slides = document.querySelectorAll(".hero-slide");

window.showSlide = function(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

window.nextSlide = function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

window.prevSlide = function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);