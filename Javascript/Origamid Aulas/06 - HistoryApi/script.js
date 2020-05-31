const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  fecthPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fecthPage(url) {
  document.querySelector('.content').innerHTML = 'Carregando';
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContext(pageText);
}

function replaceContext(newText) {
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
  fecthPage(window.location.href);
});

links.forEach(link => {
  link.addEventListener('click', handleClick);
})