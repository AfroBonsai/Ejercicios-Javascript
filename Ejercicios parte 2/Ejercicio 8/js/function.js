// -> Ejercicios JavaScript - 2


/*
Author: George Zamfir
Version: 1.0
 */


// ---------------------------------------- Ejercicio 8 ----------------------------------------


// ---------- Input ----------

let array = [];

let posicion = 0;

// ---------- Process ----------

const rellenarArray = (array, posicion) => {

    do {
        let num = prompt("introduce un número para la posición " + posicion + " del array.");
        array.push(num);
        console.log("El índice " + posicion + " del array es " + array[posicion])
        posicion++;
    }
    while (posicion < 10);
}

rellenarArray(array, posicion);

// ---------- Output ----------

console.log(array);

