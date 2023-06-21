//Função normal
function apresentarNome(nome){
    console.log(`meu nome é ${nome}`);
}

//Funções arrow => função para uma linha de instrução (também pode ser atribuida a um bloco utilizando ´=> {pipipipopopo}´)
const ArrowFunction = nome => `meu nome é ${nome}`

const soma = (n1, n2) => n1 + n2;

const soma2 = (n1, n2) => {
    if(n1 < 10 || n2 < 10){
        return n1 + n2;
    } else {
        alert("somentes numeros de 1 á 9");
    }
}

