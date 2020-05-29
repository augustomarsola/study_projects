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

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário Logado');
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

// // Resolve todos ou espera 1 dar erro
// const carregouTudo = Promise.all([login, dados]);

// // Espera o primeiro acontecer e já finaliza
const carregouTudo = Promise.race([login, dados]);

carregouTudo.then(resolucao => {
  console.log(resolucao);
})