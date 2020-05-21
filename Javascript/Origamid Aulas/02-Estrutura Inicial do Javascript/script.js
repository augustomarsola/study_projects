//Para visualizar os casos de estudo, descomente as linhas abaixo

// //Selecionando por ID
// const animais = document.getElementById('animais');
// console.log(animais);

// //Selecionando por classe
// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection[0]);

// //Seletor único
// const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);

// //Seletor geral
// const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg)

// //Exibindo HTMLColletion e NodeList
// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

// ---------

// // Retorne no console todas as imagens do site
// const allImgs = document.querySelectorAll('img');
// console.log(allImgs);

// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const animalsImgs = document.querySelectorAll('img[src^="img/imagem"]');
// console.log(animalsImgs);

// // Selecione todos os links internos (onde o href começa com #)
// const anchorLinks = document.querySelectorAll('a[href^="#"]');
// console.log(anchorLinks);

// // Selecione o primeiro h2 dentro de .animais-descricao
// const firstAnimalDsc = document.querySelector('.animais-descricao h2');
// console.log(firstAnimalDsc);

// // Selecione o último p do site
// const lastP = document.querySelectorAll('p');
// console.log(lastP[--lastP.length]);

// // Trabalhando com forEach
// const imgs = document.querySelectorAll('img');

// imgs.forEach(function (item, index, array) {
//   // console.log(item, index, array);
// });

// // Transformando em array
// const titulos = document.getElementsByClassName('titulo');
// const tituloArray = Array.from(titulos);

// tituloArray.forEach(function (item, index, array) {
//   // console.log(item, index, array);
// });

// // Usando arrow function
// imgs.forEach((item) => {
//   // console.log(item);
// });

// Mostre no console cada parágrado do site
// const allP = document.querySelectorAll('p');
// allP.forEach((item) => console.log(item));

// // Mostre o texto dos parágrafos no console
// allP.forEach((item) => console.log(item.innerText));

// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => (i++));

// -------------

// // Trabalhando com classes
// const menu = document.querySelector('.menu');

// menu.classList.add('ativo', 'teste', 'azul');
// menu.classList.remove('azul');
// menu.classList.toggle('azul');

// if (menu.classList.contains('azul')) {
//   menu.classList.add('possui-azul');
// }

// menu.classList.replace('teste', 'novo-teste');

// console.log(menu.classList);

// // Visualizando os atributos
// const animais = document.querySelector('.animais');

// console.log(animais.attributes);

// const newImg = document.querySelector('img');
// const imgSrc = newImg.getAttribute('alt');

// newImg.setAttribute('alt', 'É uma Raposa');

// const possuiAlt = newImg.hasAttribute('alt');
// console.log(possuiAlt);

// console.log(imgSrc);


// // Adicione a classe ativo a todos os itens do menu
// const menuA = document.querySelectorAll('.menu a');

// menuA.forEach((item) => item.classList.add('ativo'));

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// menuA.forEach((item, index) => {
//   if (index > 0) {
//     item.classList.remove('ativo');
//   }
// });

// // Verifique se as imagens possuem o atributo alt
// const allImgs = document.querySelectorAll('img');

// allImgs.forEach((item) => {
//   if (!item.hasAttribute('alt')) {
//     console.log(`A imagem ${item.outerHTML} não possui atributo alt!`);
//   }
// });

// // Modifique o href do link externo no menu
// menuA[--menuA.length].setAttribute('href', 'https://github.com/augustomarsola');


// ------------