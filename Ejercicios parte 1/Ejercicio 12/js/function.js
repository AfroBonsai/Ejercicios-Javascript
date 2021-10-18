// -> Ejercicios JavaScript - 1


/*
Autor: George Zamfir
Versión: 1.0
 */


// ---------------------------------------- Ejercicio 12 ----------------------------------------


// ---------- Input ----------

const contraseña = "password";

let intentos = 3;

let pass = "";

// ---------- Process & Output ----------

do {
    pass = prompt("Introduce la contraseña:");
    intentos -= 1;
    console.log("Contraseña introducida: " + pass);

    if (pass == contraseña) {
        console.log("Ehorabuena! Contraseña correcta.");
        alert("Ehorabuena! Contraseña correcta.");
        intentos = 0;
    }
    else (console.log("Contraseña incorrecta! Intentos restantes: " + intentos), alert("Contraseña incorrecta! Intentos restantes: " + intentos))

    if (intentos == 0 && pass != contraseña) {
        console.log("No te quedan más intentos! Contraseña bloqueada.");
        alert("No te quedan más intentos! Contraseña bloqueada.");
    }
} while (intentos > 0);

