const divPiada = document.querySelector('#piada');
const btnProx = document.querySelector('#proxPiada');

function gerarPiada() {
  const api = fetch('https://api.chucknorris.io/jokes/random');

  api
    .then(r => r.json())
    .then(r => {
      divPiada.innerText = r.value;
    })
    .catch(() => divPiada.innerText = 'ERRO');
}

gerarPiada();

btnProx.addEventListener('click', gerarPiada);