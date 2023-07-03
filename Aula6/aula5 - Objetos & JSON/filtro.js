const clientes = require("./clientes.JSON");

function filtroDeApsSemNMR(clientes){
    clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtroDeApsSemNMR(clientes);

console.log(filtrados);