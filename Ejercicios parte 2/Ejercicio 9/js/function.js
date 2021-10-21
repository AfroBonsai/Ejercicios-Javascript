// -> Ejercicios JavaScript - 2


/*
Author: George Zamfir
Version: 1.0
 */


// ---------------------------------------- Ejercicio 9 ----------------------------------------

// ---------- Input ----------

let arraySize = parseInt(prompt("introduce el tamaño del array:"));

let array = [];

let index = 0;

// ---------- Process & Output ----------

const rellenarArray = (array, index) => {

    do {
        let num = prompt("introduce un número para la posición " + index + " del array.");
        array.push(num);
        console.log("El índice " + index + " del array es " + array[index]);
        index++;
    }
    while (index < arraySize);
}

rellenarArray(array, index);

