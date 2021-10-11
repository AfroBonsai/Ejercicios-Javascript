// -> Ejercicios JavaScript - 2


/*
Author: George Zamfir
Version: 1.0
 */


// ---------------------------------------- Ejercicio 2 ----------------------------------------


// ---------- Input ----------

let numeros = prompt("Introduce la cantidad de números aleatorios:");
let min = parseInt(prompt("Introduce el mínimo:"));
let max = parseInt(prompt("Introduce el máximo:"));

// ---------- Process & Output ----------

for (let i = 0 ; i < numeros ; i++){
    let randomizar = () => { return Math.floor(Math.random() * (max - min + 1)) + min};
    let resultado = randomizar();
    console.log(resultado);
}

