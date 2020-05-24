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

// //Visualizando o distânciento e posicionamento dos elementos
// const listaAnimais = document.querySelector('.animais-lista');

// const listaHeight = listaAnimais.clientHeight;
// const listaHeightScroll = listaAnimais.scrollHeight;
// const listaTop = listaAnimais.offsetTop;

// console.log(listaHeight, listaHeightScroll, listaTop);

// const primeiroH2 = document.querySelector('h2');
// const h2Left = primeiroH2.offsetLeft;
// console.log(h2Left);

// // Método que retorna todos os valores de posicionamento
// const animaisSection = document.querySelector('.animais');
// const rect = animaisSection.getBoundingClientRect();

// console.log(
//   rect,
//   rect.height,
//   rect.bottom,
//   rect.left
// );

// // Posicionamento com Window
// console.log(
//   window.innerWidth,
//   window.outerWidth,
//   window.innerHeight,
//   window.outerHeight,
//   window.pageXOffset,
//   window.pageYOffset
// );

// // MatchMedia funciona como o media querie do CSS
// const small = window.matchMedia('(max-width: 600px)');

// if (small.matches) {
//   console.log('Tela menor que 600px')
// } else {
//   console.log('Tela maior que 600px')
// }


// // Verifique a distância da primeira imagem
// // em relação ao topo da página
// const firstImg = document.querySelector('img');
// console.log(firstImg.offsetTop);

// // Retorne a soma da largura de todas as imagens
// const allImgs = document.querySelectorAll('img');
// let imgSize = 0;

// window.onload = function () {
//   allImgs.forEach((item) => {
//     imgSize += item.clientWidth;
//   });
//   console.log(imgSize);
// };

// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)
// const pageLinks = document.querySelectorAll('a');

// pageLinks.forEach((item) => {
//   const width = item.clientWidth;
//   const heigth = item.clientHeight;

//   if (width < 48 || heigth < 48) {
//     console.log(`O link ${item.outerHTML} está com um tamanho muito pequeno para dispositivos mobile`);
//   } else {
//     console.log('Todos os links estáo com um bom tamanho');
//   }
// });

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu
// const mobileSize = window.matchMedia('(max-width: 720px)');

// if (mobileSize.matches) {
//   const menu = document.querySelector('.menu');
//   menu.classList.add('menu-mobile');
// }


// -----------


// //Trabalhando com eventos


//Chamada principal
// const img = document.querySelector('img');

// img.addEventListener('click', function () {
//   console.log('clicou');
// });

// //Declarando a função no call back
// const img = document.querySelector('img');

// function callback() {
//   console.log('clicou');
// }

// img.addEventListener('click', callback);


// // // Primeiro parâmetro do callback é o evento
// const img = document.querySelector('img');

// function callback(event) {
//   console.log(event);
// }

// img.addEventListener('click', callback);

// // Propriedades do event
// const animaisLista = document.querySelector('.animais-lista');

// function excCallback(event) {
//   const currentTarget = event.currentTarget;
//   const target = event.target;
//   const type = event.type;
//   const path = event.path;
//   console.log(currentTarget, target, type, path);
// }

// animaisLista.addEventListener('click', excCallback);

// // Método muito útilizado preventDefault
// const linkInterno = document.querySelector('a[href^="http"]');

// function clickLink(event) {
//   event.preventDefault();
//   console.log(event.currentTarget.href);
// }

// linkInterno.addEventListener('click', clickLink); // Dessa forma evita o direcionamento para a página

// // É necessário utilizar o forEach para adicionar o addEventListener para múltiplos alvos.
// const imgs = document.querySelectorAll('img');

// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute('src');
//   console.log(src);
// }

// imgs.forEach((item) => {
//   item.addEventListener('click', imgSrc);
// });



// // Quando o usuário clicar nos links internos do site,
// // adicione a classe ativo ao item clicado e remova dos
// // demais itens caso eles possuam a mesma. Previna
// // o comportamento padrão desses links
// const linkInterno = document.querySelectorAll('a[href^="#"]');

// function ativaLink(e) {
//   e.preventDefault();
//   linkInterno.forEach((item) => item.classList.remove('ativo'));
//   e.currentTarget.classList.add('ativo');
// }

// linkInterno.forEach((item) => {
//   item.addEventListener('click', ativaLink);
// });

// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados
// const allElements = document.querySelectorAll('body *');

// function showElement(e) {
//   console.log(e.target);
// }

// allElements.forEach((item) => {
//   item.addEventListener('click', showElement);
// });

// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento

// function removeElement(e) {
//   e.target.remove();
// }

// allElements.forEach((item) => {
//   item.addEventListener('click', removeElement);
// });

// // Se o usuário clicar na tecla (t), aumente todo o texto do site. 
// const htmlSite = document.querySelector('html');

// function aumentoTexto(e) {
//   if (e.key === 't')
//     htmlSite.style.fontSize = '2rem';
// }

// document.addEventListener('keyup', aumentoTexto);


// ---------


//Transversing e Manipulação

// // // Selecionando os elementos

// const menu = document.querySelector('.menu');

// menu.outerHTML; // Seleciona todos os elementos, inclusive ele mesmo
// menu.innerHTML; // Seleciona todos os elemtnos, meno ele mesmo
// menu.innerText; // Seleciona o texta interno


// // Tranversing, navegando pelo DOM
// const lista = document.querySelector('.animais-lista');

// lista.parentElement; //Pai
// lista.parentElement.parentElement; //Pai do pai
// lista.previousElementSibling; //Elemento acima
// lista.nextElementSibling; //Elemento abaixo

// lista.children; //Todos os elementos filhos
// lista.children[0]; //Primeiro elemento filho
// lista.children[--lista.children.length]; //Último filho

// // Manipulando elementos
// const lista = document.querySelector('.animais-lista');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); //Move lista para contato
// contato.insertBefore(lista, titulo); //Insere a lista antes de titulo
// contato.removeChild(titulo); //Remove titulo de contato
// contato.replaceChild(lista, titulo); //Substitui o titilo pela lista

// //Criando novos elementos
// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Título';
// novoH1.classList.add('titulo');

// animais.appendChild(novoH1);


// // Clonando elementos
// const titulo = document.querySelector('h1');
// const Titulo2 = document.querySelector('h1');
// const novoTitulo = titulo;
// // Todos estes títulos são iguais

// const cloneTitulo = titulo.cloneNode(true);
// const contato = document.querySelector('.contato');
// contato.appendChild(cloneTitulo);




// // Duplique o menu e adicione ele em copy
// const menu = document.querySelector('.menu');
// const copy = document.querySelector('.copy');
// const menuC = menu.cloneNode(true);

// copy.appendChild(menuC);

// // // Selecione o primeiro DT da dl de Faq
// const faq = document.querySelector('.faq');
// const faqDl = faq.querySelector('dt');
// console.log(faqDl);

// // // Selecione o DD referente ao primeiro DT
// console.log(faqDl.nextElementSibling);

// // // Substitua o conteúdo html de .faq pelo de .animais
// const animais = document.querySelector('.animais');

// faq.innerHTML = animais.innerHTML;



// ---------

// // Criando constructor functions

// function Dom(seletor) {
//   const element = document.querySelector(seletor);
//   this.ativo = function (classe) {
//     element.classList.add(classe);
//   };
// }

// const lista = new Dom('li');
// lista.ativo('ativo');

// const lastLi = new Dom('li:last-child');
// lastLi.ativo('ativo');



// // Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.andar = function () {
//     console.log(this.nome + ' andou');
//   };
// }

// // Crie 3 pessoas, João - 20 anos,
// // Maria - 25 anos, Bruno - 15 anos
// const joao = new Pessoa('João', 20);
// const maria = new Pessoa('Maria', 25);
// const bruno = new Pessoa('Bruno', 15);

// // Crie uma Constructor Function (Dom) para manipulação
// // de listas de elementos do dom. Deve conter as seguintes
// // propriedades e métodos:
// //
// // elements, retorna NodeList com os elementos selecionados
// // addClass(classe), adiciona a classe a todos os elementos
// // removeClass(classe), remove a classe a todos os elementos
// function Dom(elements) {
//   this.elements = document.querySelectorAll(elements);
//   this.addClass = function (classe) {
//     this.elements.forEach((element) => {
//       element.classList.add(classe);
//     });
//   };
//   this.removeClass = function (classe) {
//     this.elements.forEach((element) => {
//       element.classList.remove(classe);
//     });
//   };
// }


// // -------------


// // Crie uma função construtora de Pessoas
// // Deve conter nome, sobrenome e idade
// // Crie um método no protótipo que retorne
// // o nome completo da pessoa
// function Pessoas(nome, sobrenome, idade) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.idade = idade;
// }

// Pessoas.prototype.nomeCompleto = function () {
//   return `${this.nome} ${this.sobrenome}`;
// };

// // Liste os métodos acessados por 
// // dados criados com NodeList,
// // HTMLCollection, Document
// console.log(NodeList.prototype);
// console.log(HTMLCollection.prototype);
// console.log(Document.prototype);

// // Liste os construtores dos dados abaixo
// const li = document.querySelector('li');

// console.log(li.constructor.name); // HTMLLIElement
// console.log(li.click.constructor.name); // Function
// console.log(li.innerText.constructor.name); // String
// console.log(li.value.constructor.name); // Nunber
// console.log(li.hidden.constructor.name); // Boolean
// console.log(li.offsetLeft.constructor.name); // Number
// // console.log(li.click().constructor.name); // undefined

// // Qual o construtor do dado abaixo:
// console.log(li.hidden.constructor.name.constructor.name); // String


// // -------

// Liste 5 objetos nativos
// Object
// String
// Array
// Function
// Number

// Liste 5 objetos do browser
// Window
// history
// Document
// HTMLColletion
// NodeList

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
// document.webkitVisibilityState


// ---------


// // Strings

// // Utilizando o foreach na array abaixo,
// // some os valores de Taxa e os valores de Recebimento

// const transacoes = [{
//     descricao: 'Taxa do Pão',
//     valor: 'R$ 39',
//   },
//   {
//     descricao: 'Taxa do Mercado',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Cliente',
//     valor: 'R$ 99',
//   },
//   {
//     descricao: 'Taxa do Banco',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Cliente',
//     valor: 'R$ 49',
//   },
// ];

// let taxas = 0,
//   recebimento = 0;

// transacoes.forEach((transacao) => {
//   let valorLimpo = +transacao.valor.replace('R$ ', '');
//   if (transacao.descricao.slice(0, 4) === 'Taxa')
//     taxas += valorLimpo;
//   else
//     recebimento += valorLimpo;
// });

// console.log(`Total de taxas: R$ ${taxas} / Total de recebimento R$ ${recebimento}`);

// // Retorne uma array com a lista abaixo
// const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
// const transportesArray = transportes.split(';');
// console.log(transportesArray);

// // Substitua todos os span's por a's
// const html = `<ul>
//                 <li><span>Sobre</span></li>
//                 <li><span>Produtos</span></li>
//                 <li><span>Contato</span></li>
//               </ul>`;
// const htmlMod = html.split('span').join('a');
// console.log(htmlMod);

// // Retorne o último caracter da frase
// const frase = 'Melhor do ano!';
// const ultimochar = frase.slice(-1);
// console.log(ultimochar);

// // Retorne o total de taxas
// const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
// let totalTaxas = 0;

// transacoes2.forEach((transacao) => {
//   const nomeLimpo = transacao.toLowerCase().trim();
//   if (nomeLimpo.includes('taxa')) ++totalTaxas;
// });

// console.log(totalTaxas);


// // ---------


// // Number

// Retorne um número aleatório
// entre 1050 e 2000
const randomNum = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(randomNum);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const numerosArray = numeros.split(',');
const numeroMax = Math.max(...numerosArray);
console.log(numeroMax);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
  'R$ 230  ', 'r$  200'
];
let valorTotal = 0;

listaPrecos.forEach((preco) => {
  valorTotal += limparPreco(preco);
});

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

console.log(valorTotal);