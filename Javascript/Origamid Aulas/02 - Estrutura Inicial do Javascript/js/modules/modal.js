export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', foraDaModal);
  }

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function foraDaModal(e) {
    if (e.target === this)
      toggleModal(e);
  }

}