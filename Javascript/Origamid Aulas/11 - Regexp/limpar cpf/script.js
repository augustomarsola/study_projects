// const cpfsList = document.querySelectorAll('.cpf li');

// const elementsInnerText = ([...elements]) => {
//   return elements.map(element => element.innerText);
// }

// const limparCPF = (cpf) => {
//   return cpf.replace(/\D/g, '');
// }

// const construirCPF = (cpf) => {
//   return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
// }

// const formatarCPFS = (cpfs) => {
//   return cpfs.map(limparCPF).map(construirCPF);
// }

// const substituiCPFS = (cpfsElements) => {
//   const cpfs = elementsInnerText(cpfsElements);
//   const cpfsFormatados = formatarCPFS(cpfs);

//   cpfsElements.forEach((element, index) => {
//     element.innerText = cpfsFormatados[index];
//   })
// }

// substituiCPFS(cpfsList);

const cpfsList = document.querySelectorAll(".cpf li");

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, "");
};

const constuirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(constuirCPF);
};

const substituiCPFS = (cpfsElement) => {
  const cpfs = elementsInnerText(cpfsElement);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsFormatados.forEach((element, index) => {
    const listaFormatada = document.querySelector(".cpfFormatado");
    const novaLi = document.createElement("li");

    novaLi.innerText = cpfsFormatados[index];
    listaFormatada.appendChild(novaLi);
  });
};

console.log(substituiCPFS(cpfsList));
