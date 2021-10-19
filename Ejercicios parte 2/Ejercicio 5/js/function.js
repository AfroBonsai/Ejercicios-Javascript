// -> Ejercicios JavaScript - 2


/*
Author: George Zamfir
Version: 1.0
 */


// ---------------------------------------- Ejercicio 5 ----------------------------------------


// ---------- Input ----------

let numero = prompt("Indica que número quiere convertir a binario");
let binario = [];
let binarioHecho = [];

// ---------- Process ----------

const pasarBinario = (num) => {

    numero = parseInt(numero);

    if (num == 0) {
        binario.push(0);
    }

    while (num > 0) {
        binario.push(num % 2);
        num = parseInt(num / 2);
    }

    binario = binario.reverse(binario);

    for (let i = 0; i < binario.length; i++) {
        binarioHecho = binarioHecho + binario[i];
    }
}

// ---------- Output ----------

pasarBinario(numero);

console.log(binario.toString());

