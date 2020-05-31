import outsideClick from './outsideclick.js';

export default function initmenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu(e) {
    menuButton.classList.add('active');
    menuList.classList.add('active');

    outsideClick(menuList, eventos, () => {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  menuButton.addEventListener('click', openMenu);
}