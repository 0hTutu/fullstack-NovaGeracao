const cliente = {
    nome: "andre",
    idade: 32,
    CPF: "23123123",
    email: "andre@dominio.com"
}

console.log(`o nome do cliente é ${cliente["nome"]} e ${cliente["nome"]} tem ${cliente["idade"]} anos!`);

console.log(`o CPF de ${cliente["nome"]} é ${cliente["CPF"]} e seu email é ${cliente["email"]}`);

const chaves = ["nome","idade","CPF","email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})