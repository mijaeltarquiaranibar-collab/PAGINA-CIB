const hero = document.querySelector('.hero');
const images = [
  'images/hero/hero1.jpg',
  'images/hero/hero2.jpg',
  'images/hero/hero3.jpg',
  'images/hero/hero4.jpg'
];

let currentIndex = 0;

// Crear un pseudo-elemento para el fade (usa ::before)
let heroBefore = window.getComputedStyle(hero, '::before');

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;

  // Crear un div temporal para fade
  const fadeDiv = document.createElement('div');
  fadeDiv.style.backgroundImage = `url(${images[currentIndex]})`;
  fadeDiv.style.position = 'absolute';
  fadeDiv.style.top = 0;
  fadeDiv.style.left = 0;
  fadeDiv.style.right = 0;
  fadeDiv.style.bottom = 0;
  fadeDiv.style.backgroundSize = 'cover';
  fadeDiv.style.backgroundPosition = 'center';
  fadeDiv.style.opacity = 0;
  fadeDiv.style.transition = 'opacity 1s ease-in-out';
  fadeDiv.style.zIndex = 0;
  hero.appendChild(fadeDiv);

  // Forzar reflow para activar la transición
  void fadeDiv.offsetWidth;

  // Iniciar fade-in
  fadeDiv.style.opacity = 1;

  // Después de la transición, cambiar el fondo del hero y remover fadeDiv
  setTimeout(() => {
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    hero.removeChild(fadeDiv);
  }, 1000);
}

// Configura el fondo inicial
hero.style.backgroundImage = `url(${images[currentIndex]})`;

// Cambia cada 5 segundos
setInterval(changeBackground, 4000);
