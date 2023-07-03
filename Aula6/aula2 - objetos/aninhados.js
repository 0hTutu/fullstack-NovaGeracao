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

console.log(cliente.endereco);
