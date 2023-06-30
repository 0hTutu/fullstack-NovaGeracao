
const notas = [10, 9.5, 8, 7, 6];

const notasNovas = notas.map( (nota) => nota + 1 >= 10 ?  10 : nota + 1);

console.log(`as notas novas são: ${notasNovas}`);