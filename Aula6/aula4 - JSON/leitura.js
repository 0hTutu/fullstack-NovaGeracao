const dados = require("./cliente.json")

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

//vai ser undefined
console.log(clienteEmString.nome);

//transformar novamente em object
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);