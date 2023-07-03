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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.log("Cadastre um endereço.")
}