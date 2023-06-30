const notas = [10, 6.5, 8, 7.5];

let somadasnotas = 0;

for(let i = 0;i < notas.length; i++ ){
    somadasnotas += notas[i];
}

const media = somadasnotas/notas.length;

console.log(`a media é: ${media}`);