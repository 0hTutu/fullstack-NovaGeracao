const idadeMin = 18;
const idadeCliente = parseInt(prompt("sua idade"));

// if ( idadeCliente >= idadeMin){
//     console.log("você está liberado.");
// } else {
//     console.log("você não está liberado pois não tem a idade minima.");
// }
//                   condição                   true                                 false                                         
console.log(idadeCliente >= idadeMin ? "você está liberado.":"você não está liberado pois não tem a idade minima.");
