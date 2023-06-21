const numero = 5;
const texto = "5";

/*  valor booleano: true / porque? Por que eles podem ser de tipos diferentes ´number´ e ´string´,
mas tem um valor semelhante que é 5.    */
//comparação implicita
console.log(numero == texto);
/*  valor booleano: false / porque? Por que eles não são extritamente iguais.
 um é ´number´ e o outro´string´, por não serem ambos ´number´ eles não tem uma valor igual.
 
    === : compara o valor e tipo de dado.

    == : compara apenas o valor.

    != : não igual.

    !== : estritamente não igual, compara o valor e tipo de dado, também retornam ´true´ ou `false`.    */
console.log(numero === texto);
typeof(numero);
typeof(texto);