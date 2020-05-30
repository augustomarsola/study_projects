const btnSearch = document.querySelector('#buscarCep');
const divResultado = document.querySelector('.resultado');
const divErro = document.querySelector('.erro');
const rCep = document.querySelector('#rCep');
const rUf = document.querySelector('#rUf');
const rCidade = document.querySelector('#rCidade');
const rBairro = document.querySelector('#rBairro');

btnSearch.addEventListener('click', searchLocation);

function searchLocation() {
  divResultado.classList.remove('active');
  divErro.classList.remove('active');

  const cep = document.querySelector('#cep').value;
  const api = fetch(`https://viacep.com.br/ws/${cep}/json/`);

  api
    .then(r => r.json())
    .then(r => {
      console.log(r);
      rCep.innerText = r.cep;
      rUf.innerText = r.uf;
      rCidade.innerText = r.localidade;
      rBairro.innerText = r.bairro;
      divResultado.classList.add('active');
    }).catch(() => {
      divErro.classList.add('active');
    });
}