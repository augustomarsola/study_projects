// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({
//         nome: 'Augusto',
//         idade: 28
//       });
//     }, 1000);
//   } else {
//     reject(Error('Ocorreu um erro'));
//   }
// });

// const retorno = promessa
//   .then(resolucao => {
//     console.log(resolucao);
//     resolucao.profissao = 'Front-End';
//     return resolucao;
//   })
//   .then(resolucao => {
//     console.log(resolucao);
//   }, rejeitado => {
//     console.log(rejeitado);
//   })
//   .finally(() => {
//     console.log('acabou')
//   });

// console.log(retorno);

// const login = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Usuário Logado');
//   }, 1000);
// });

// const dados = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Dados Carregados');
//   }, 1500);
// });

// // // Resolve todos ou espera 1 dar erro
// // const carregouTudo = Promise.all([login, dados]);

// // // Espera o primeiro acontecer e já finaliza
// const carregouTudo = Promise.race([login, dados]);

// carregouTudo.then(resolucao => {
//   console.log(resolucao);
// });


// // Chamada Texto
const doc = fetch('./doc.txt');

doc
  .then(r => r.text())
  .then(body => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
  });


// // Chamada Object
const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep
  .then(r => r.json())
  .then(body => {
    const conteudo = document.querySelector('.cep');
    conteudo.innerText = body.logradouro;
  });


// // Chamada texto em um html
const sobre = fetch('./sobre.html');
const div = document.createElement('div');

sobre
  .then(r => r.text())
  .then(body => {
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    document.querySelector('h1').innerText = titulo.innerText;
  });


// // Chamada Blob com uma imagem
const imagem = fetch('./imagem.png');

imagem
  .then(r => r.blob())
  .then(body => {
    const blobUrl = URL.createObjectURL(body);
    const newImg = document.createElement('img');
    const imagemDom = document.querySelector('.imagem');
    imagemDom.appendChild(newImg);
    imagemDom.querySelector('img').src = blobUrl;
  });


// // Clonando uma chamada
const cep2 = fetch('https://viacep.com.br/ws/01001000/json/');

// cep2.then(r => {
//   const r2 = r.clone();
//   r.text().then(text => console.log(text));
//   r2.json().then(json => console.log(json));
// });

// // Verificando o header da chamada
// cep2.then(r => {
//   console.log(r);
//   r.headers.forEach(console.log);
// });

// // Verificando o status
// cep2.then(r => {
//   console.log(r.status);
//   if (r.status === 200) {
//     console.log('Página encontrada');
//   } else {
//     console.log('Ocorreu um erro no página');
//   }
// });

// // Verificando a URL e o tipo
cep2.then(r => {
  console.log(r.url);
  console.log(r.type);
});