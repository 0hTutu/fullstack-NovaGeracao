const clientes = require("./clientes.JSON");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Jerrome");
const encontrado2 = encontrar(clientes, "telefone", "3569848931");

console.log(encontrado);
console.log(encontrado2);