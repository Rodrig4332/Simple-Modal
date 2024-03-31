const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open-modal-btn');
const closeBtn = document.getElementById('close-modal-btn');

openBtn.addEventListener('click', () => {
  modal.classList.add('open')
  overlay.classList.add('open')
});

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click',  closeModal);

function closeModal() { 
  modal.classList.remove('open')
  overlay.classList.remove('open')
}