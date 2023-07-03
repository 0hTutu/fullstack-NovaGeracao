const cliente = {
    nome = "José",
    idade = 24,
    email = "josesilva@firma.com",
    telefone = ["51 99232307","51 99132340" ]
};

cliente.enderecos = [
    {
    rua = " Av. Franlin Roosevelt",
    numero = "732",
    ap = false,
    complemento = "Casa verde"
}
];

cliente.enderecos.push({
    rua = "Rua Alvares de Azevedo",
    numero = "403",
    ap = true,
    complemento = "Ap. 202"
});

console.log(cliente.enderecos);

const apenasAps = cliente.enderecos.filter(
    (endereco) => endereco.ap === true
);

console.log(apenasAps);