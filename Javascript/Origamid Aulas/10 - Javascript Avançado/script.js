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

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
};

const {
  digitais,
  fisicas,
  digitais: {
    livros,
    videos
  }
} = cliente.compras;

console.log(digitais, videos);

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {
  backgroundColor,
  color,
  margin
} = btnStyles;
console.log(backgroundColor);
console.log(color);
console.log(margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';
[cursoAtivo, cursoInativo] = ['TypeScript', 'CSS'];

console.log(cursoAtivo);
console.log(cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {
  cor: bobCor
} = cachorro;

console.log(bobCor);


// ---------


// // Parâmetro no ES6

// function perimetroForm(lado, totalLados = 4) {
//   console.log(arguments);
//   return lado * totalLados;
// }

// console.log(perimetroForm(10, 5), perimetroForm(5));

// function allArguments(...listaArgumentos) {
//   console.log(listaArgumentos);
// }

// console.log(allArguments('teste', 10, 16, ['teste1', 'teste2']));

// const frutas = ['Banana', 'Uva', 'Morango'];
// const legumes = ['Cenoura', 'Batata'];
// const comidas = ['Pizza', ...frutas, 'Chocolate', ...legumes];

// console.log(comidas);

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButton = createButton();

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas);
console.log(comidas);


// // ------

// // Loops e Interable

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const listas = document.querySelectorAll('li');
for (const lista of listas) {
  lista.classList.add('active');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for (const prop in window) {
  console.log(`${prop}: ${window[prop]}`);
}