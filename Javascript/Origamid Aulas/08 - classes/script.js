// // // Criando um construtor de botão simples

// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function () {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// };

// const blueButton = new Button('Comprar', 'blue');

// console.log(blueButton.element());


// // // Criando uma classe que gera botão

// class Button2 {
//   constructor(text, background, color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//   }
//   element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     buttonElement.style.color = this.color;
//     return buttonElement;
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//     return targetElement;
//   }
//   static redButton(text) {
//     return new Button2(text, 'red', 'white');
//   }
// }

// const redButton = new Button2('Vender', 'red');

// console.log(redButton.appendTo('body'));

// const newRedButton = Button2.redButton('Vender');

// console.log(newRedButton);

// //-----

// // // Get e Set

// const button = {
//   get tamanho() {
//     return this.numero || 100;
//   },
//   set tamanho(numero) {
//     this.numero = numero * 200;
//   }
// };

// // // Utilizando Classe

// class Button2 {
//   constructor(text, color) {
//     this.text = text;
//     this.color = color;
//   }
//   get element() {
//     const type = this._elementType || 'button';
//     const buttonElement = document.createElement(type);
//     buttonElement.innerText = this.text;
//     buttonElement.style.color = this.color;
//     return buttonElement;
//   }
//   set element(type) {
//     this._elementType = type;
//   }
// }
// const blueButton = new Button2('Comprar', 'blue');

// // -------

// // Extends

class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar();
    console.log('Acelerou muito rápido');
  }
  empinar() {
    console.log(`Moto empinou com ${this.rodas} rodas`);
  }
}

const cg = new Moto(4, true);
const civic = new Veiculo(2);