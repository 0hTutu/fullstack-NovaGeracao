const cliente = {
    nome = "André",
    idade = 24,
    email = "andrezinhogameplays@carrosdaoras.com",
    telefone = ["51 99232307","51 99132340"],
    saldo = 200,
    efetuaPagamento: function verificacao(valor){
        if (valor > this.saldo) {
            console.log("saldo insuficiente");
        } else {
            this.saldo -= valor
            console.log(`pagamento realizado. NOVO SALDO: ${saldo}`)
        }
    } 
};

cliente.efetuaPagamento(250);

cliente.efetuaPagamento(40);

