function typeWriter(element, text, i = 0) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(element, text, i), 100); // Velocidad de escritura
  } else {
    // Mantener el cursor parpadeante al final
    element.style.borderRight = "2px solid #ffffff";
    element.style.animation = "blink-caret 0.75s step-end infinite";
  }
}

function startMultiTypewriter() {
  const elements = document.querySelectorAll(".typewriter-multi");

  elements.forEach((element, index) => {
    const text = element.textContent; // Guardamos el texto original
    element.textContent = ""; // Limpiamos el contenido

    // Comenzamos a escribir cada elemento con un retraso
    setTimeout(() => {
      element.style.width = "auto";
      typeWriter(element, text);
    }, index * 3000); // Retraso entre cada título
  });
}

// Iniciar cuando el documento esté listo
document.addEventListener("DOMContentLoaded", () => {
  startMultiTypewriter();
});

let currentRotation = 0;
const slider = document.querySelector('.slider');
const container = document.querySelector('.slider-container');
const numCards = document.querySelectorAll('.card').length;
const anglePerCard = 360 / numCards;

// Variables para el control del mouse
let isDragging = false;
let startX;
let rotationStartX;

function updateSlider() {
  slider.style.transform = `rotateY(${currentRotation}deg)`;
}

function nextSlide() {
  currentRotation -= anglePerCard;
  updateSlider();
}

function prevSlide() {
  currentRotation += anglePerCard;
  updateSlider();
}

// Control con el mouse
container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  rotationStartX = currentRotation;
  slider.style.transition = 'none'; // Desactivar transición durante el arrastre
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  const deltaX = e.clientX - startX;
  const rotationDelta = (deltaX / 5); // Ajusta la sensibilidad del giro
  currentRotation = rotationStartX + rotationDelta;
  updateSlider();
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  slider.style.transition = 'transform 0.1s'; // Restaurar transición
  
  // Ajustar a la carta más cercana
  const anglePerCard = 360 / numCards;
  const normalizedRotation = currentRotation % 360;
  const targetRotation = Math.round(normalizedRotation / anglePerCard) * anglePerCard;
  currentRotation = targetRotation;
  updateSlider();
});

// Prevenir el arrastre de imágenes y selección de texto
container.addEventListener('dragstart', (e) => e.preventDefault());
container.addEventListener('selectstart', (e) => e.preventDefault());

// Mantener el soporte táctil
let touchStartX = 0;
let touchEndX = 0;

container.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  slider.style.transition = 'none';
});

container.addEventListener('touchmove', (e) => {
  const deltaX = e.touches[0].clientX - touchStartX;
  const rotationDelta = (deltaX / 5);
  currentRotation = rotationStartX + rotationDelta;
  updateSlider();
});

container.addEventListener('touchend', (e) => {
  slider.style.transition = 'transform 0.1s';
  touchEndX = e.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) nextSlide();
  if (touchStartX - touchEndX < -50) prevSlide();
});

// grid
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.zIndex = '1';
    });
  });