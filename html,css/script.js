// Selecionando o menu hambúrguer e os links de navegação
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Evento para abrir/fechar o menu no modo mobile
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carrossel Automático
let currentSlide = 0;
const slides = document.querySelectorAll('.carrossel .slide');

// Função para ocultar todos os slides
function hideSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
}

// Função para mostrar o slide atual
function showSlide(index) {
    hideSlides();
    slides[index].style.display = 'block';
}

// Função para alternar automaticamente os slides
function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Iniciar carrossel automaticamente a cada 3 segundos
setInterval(autoSlide, 3000);

// Mostrar o primeiro slide ao carregar a página
window.onload = () => {
    showSlide(currentSlide);
};
