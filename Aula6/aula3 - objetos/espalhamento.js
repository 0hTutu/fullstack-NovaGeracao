const cliente = {
    nome: "José",
    idade: 24,
    email: "josesilva@firma.com",
    telefone: ["51 99232307","51 99132340" ]
};

cliente.enderecos = [
    {
      rua: " Av. Franlin Roosevelt",
      numero: "732",
      ap: false,
      complemento: "Casa verde"
    }
];

function Ligar(telComercial, TelResidencial){
    console.log("ligando para " + telComercial);
    console.log("ligando para " + TelResidencial);
};

// Ligar(cliente.telefone[telefone[0], telefone[1]]);

Ligar(...cliente.telefone);


const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);

