import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector("#cpf");
const validarCpf = new ValidarCpf(cpf).inciar();

const validadorCpf = new ValidarCpf();

console.log(validadorCpf.validar("111 222 333 33"));

console.log(validarCpf);
