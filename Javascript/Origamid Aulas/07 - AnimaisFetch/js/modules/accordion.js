export default function initAccodrion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const classeAtivo = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(classeAtivo);
    accordionList[0].nextElementSibling.classList.add(classeAtivo);

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }

  function activeAccordion() {
    this.classList.toggle(classeAtivo);
    this.nextElementSibling.classList.toggle(classeAtivo);
  }
}