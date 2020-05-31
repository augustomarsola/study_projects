// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  if (valor) {
    return console.log('É verdadeiro');
  } else {
    return console.log('É falso');
  }
}

isTruthy('valor');

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function squareP(lado) {
  return console.log(lado * 4);
}

squareP(10);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return console.log(`${nome} ${sobrenome}`);
}

nomeCompleto('Augusto', 'Marsola');

// Crie uma função que verifica se um número é par
function isEven(number) {
  if (number % 2) {
    return console.log(`O número ${number} é ímpar`);
  } else {
    return console.log(`O número ${number} é par`);
  }
}

isEven(6);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verifyType(value) {
  return console.log(typeof (value));
}

verifyType(5000);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
  return console.log('Augusto Marsola');
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);