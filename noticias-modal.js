// Seleccionar todas las noticias
const noticias = document.querySelectorAll('.noticia');

// Crear modal HTML dinámicamente
const modal = document.createElement('div');
modal.classList.add('modal-noticia');
modal.innerHTML = `
  <div class="modal-content">
    <span class="modal-close">&times;</span>
    <img src="" alt="" id="modal-img">
    <p id="modal-desc"></p>
  </div>
`;
document.body.appendChild(modal);

// Elementos del modal
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const closeModal = modal.querySelector('.modal-close');

// Abrir modal al hacer clic en una noticia
noticias.forEach(noticia => {
  noticia.addEventListener('click', () => {
    const img = noticia.querySelector('img');
    const desc = noticia.querySelector('p');

    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalDesc.textContent = desc.textContent;

    modal.classList.add('active');
  });
});

// Cerrar modal con la "X"
closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Cerrar modal haciendo clic fuera del contenido
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
