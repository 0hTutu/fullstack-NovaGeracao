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

for(let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo != "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
};
