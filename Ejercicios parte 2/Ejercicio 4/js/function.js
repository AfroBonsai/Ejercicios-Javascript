// -> Ejercicios JavaScript - 2


/*
Author: George Zamfir
Version: 1.0
 */


// ---------------------------------------- Ejercicio 4 ----------------------------------------


// ---------- Input ----------

const num = parseInt (prompt("Introduce un número para calcular el factorial:"));

let i = 1;

let contador = [];

let total = 1;

// ---------- Process ----------

for (i; i <= num; i++) {
    contador.push(i);
}

console.log(contador);

for (let n = 0; n < contador.length; ++n) {
    total *= contador[n];
}

// ---------- Output ----------

console.log(total);
alert("Su factorial es de: " + total);


// do {
//     resultado = num - i;
//     i++;
//     console.log(resultado);
// total = resultado * resultado;
// console.log(total);
// } while (i < num);

// for (n; n < num; n++) {
//     resultado = contador * n;
//     console.log("2. " + resultado);
// }

// console.log(resultado);


// console.log(i);
