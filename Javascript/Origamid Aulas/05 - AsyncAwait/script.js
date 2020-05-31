/* jshint ignore:start */
// async function puxarDados() {
//   try {
//     const responseDados = await fetch('./dados.json');
//     const jsonDados = await responseDados.json();

//     document.body.innerText = jsonDados.aula;
//     console.log(responseDados);
//   } catch (erro) {
//     console.log(erro);
//   }
// }

// puxarDados();

async function puxarDados() {
  const responseDados = fetch('./dados.json');
  const responseClientes = fetch('./clientes.json');

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados);
  console.log(jsonClientes);
}

puxarDados();
/* jshint ignore:end */