const notas = [10, 6, 8, 5.5, 10];

notas.pop();    

console.log(notas);

const notasdoaluno = [10, 6.5, 8, 7.5];

const media = (notasdoaluno[0] + notasdoaluno[1] + notasdoaluno[2] + notasdoaluno[3])/notasdoaluno.length;

console.log(`a média é ${media}`);