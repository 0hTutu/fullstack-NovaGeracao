// function pulaLinha() {
//     document.write("<br>");
// }

// function mostra(frase) {
//     document.write(frase);
//     pulaLinha();
// }

// var ano = 2019;
// mostra("Eu nasci em : " + (ano - 25));
// mostra("Adriano nasceu em : " + (ano - 26));
// mostra("Paulo nasceu em : " + (ano - 32));


/*
1 - Altere sua função pulaLinha para que ela pule duas linhas! Isto é, faça dois <br>s.

2- Há uma tag HTML que também é interessante para separar um resultado do outro, a <hr>. Altere a função pulaLinha() para que ela escreva no navegador um <hr> entre os dois <br>s que você já fez.

3 - A fonte do nosso programa talvez ainda não seja adequada. Há uma tag HTML que se chama <big>. Faça com que a função mostra coloque a frase entre <big> e </big>.

4 - O que acontece se você esquecer a palavra function na hora de declarar uma de suas funções? E os parênteses na declaração da função pulaLinha? Faça o teste e veja as mensagens de erro no console JavaScript do Chrome. 
*/

function pulaLinha() {
    document.write("<br><hr><br>");
}

function mostra(frase) {
    document.write("<big>" + frase + "<big>");
    pulaLinha();
}

var ano = 2019;
mostra("Eu nasci em : " + (ano - 25));
mostra("Adriano nasceu em : " + (ano - 26));
mostra("Paulo nasceu em : " + (ano - 32));