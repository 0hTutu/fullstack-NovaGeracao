const notas = [10, 6.5, 8, 7.5];

somadasnotas = 0;

notas.forEach(function(nota){
    somadasnotas += nota;
});

const media = somadasnotas/notas.length;

console.log(`a media é: ${media}`);