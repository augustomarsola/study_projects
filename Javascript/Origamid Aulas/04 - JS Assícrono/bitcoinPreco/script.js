const valorReal = document.querySelector('#valorReal');

function searchValue() {
  const api = fetch('https://blockchain.info/ticker');
  api
    .then(r => r.json())
    .then(r => {
      valorReal.innerText = r.BRL['15m'];
    })
    .catch(() => {
      valorReal.innerText = 'ERRO';
    });
}

searchValue();

setInterval(searchValue, 30000);