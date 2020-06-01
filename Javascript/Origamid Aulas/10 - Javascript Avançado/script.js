// // Exercícios Function Expressions
// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(() => {
  const priceNumber = 'R$ 9999,00';
  console.log(priceNumber);
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

function teste() {
  console.log('teste');
}

// // ------


// // Factory Function

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    return this;
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return this;
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
    return this;
  }

  return Object.freeze({
    elements,
    on,
    hide,
    show,
    addClass,
    removeClass
  });
}

const button = $$('button');
button.hide().show().addClass('ativo').removeClass('ativo');


// // -----


// // Destructuring