// -> Ejercicios JavaScript - 1


/*
Autor: George Zamfir
Versión: 1.0
 */


// ---------------------------------------- Ejercicio 6 ----------------------------------------


// ---------- Input ----------

let precio = prompt('Introduce precio del producto:');
const IVA = 1.21;
let resultado;

//---------- Process ----------

function CalcPrecio (precioPR) {
    resultado = precioPR * IVA;
}
function CalcIVA (IVAporcentaje){
    resultadoIVA = (IVAporcentaje - 1) * 100;
}

CalcPrecio(precio);
CalcIVA(IVA);

//---------- Output ----------

console.log ("Precio inicial: " + precio + " €");
console.log ("IVA: " + Math.round(resultadoIVA) + "%")
console.log ("Precio + IVA: " + parseFloat(resultado.toFixed(2)) + " €");

