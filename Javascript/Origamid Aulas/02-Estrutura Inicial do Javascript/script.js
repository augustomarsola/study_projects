function iniTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }
}
iniTabNav();

function initAccodrion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
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
initAccodrion();