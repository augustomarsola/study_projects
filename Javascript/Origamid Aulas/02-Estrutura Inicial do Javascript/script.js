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

function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Formo alternativa
    // const topo = section.offsetTop;

    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
scrollSuave();

function animaScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if (isSectionVisible)
        section.classList.add('ativo');
      else
        section.classList.remove('ativo');
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}

animaScroll();