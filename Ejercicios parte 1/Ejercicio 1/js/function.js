// -> Ejercicios JavaScript - 1


/*
Autor: George Zamfir
Versión: 1.0
 */


// ---------------------------------------- Ejercicio 1 ----------------------------------------


// ---------- Input ----------

let valorA = parse.Int(promt("Introduce el primer número:"));
let valorB = parse.Int(promt("Introduce el segundo número:"));

// ---------- Process & Output ----------

console.log('Primer número: ' + valorA);
console.log('Segundo número: ' + valorB);

if (valorA > valorB) {
    console.log('El primer número es mayor.');
    alert('El primer número es mayor.');
}
else if (valorA == valorB) {
    console.log('Los números son iguales');
    alert('Los números son iguales');
}
else {
    console.log('El segundo número es mayor.');
    alert('El segundo número es mayor.');
}

