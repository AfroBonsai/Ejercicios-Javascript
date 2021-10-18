// -> Ejercicios JavaScript - 1


/*
Autor: George Zamfir
Versión: 1.0
 */


// ---------------------------------------- Ejercicio 11 ----------------------------------------


// ---------- Input, Process & Output ----------

const dia = prompt("Introduce un día de la semana:");

console.log("Día introducido: " + dia);

switch (dia.toLowerCase()) {
        case "lunes":
                alert("Lunes es laborable");
                console.log("Lunes es laborable");
                break;

        case "martes":
                alert("Martes es laborable");
                console.log("Martes es laborable");
                break;

        case "miercoles":
                alert("Miercoles es laborable");
                console.log("Miercoles es laborable");
                break;

        case "jueves":
                alert("Jueves es laborable");
                console.log("Jueves es laborable");
                break;

        case "viernes":
                alert("Viernes es laborable");
                console.log("Viernes es laborable");
                break;

        case "sabado":
                alert("Sabado no es laborable");
                console.log("Sabado no es laborable");
                break;

        case "domingo":
                alert("Domingo no es laborable");
                console.log("Domingo no es laborable");
                break;

        default:
                alert("No es un valor correcto. (Ejemplo: Lunes)");
                console.log("No es un valor correcto. (Ejemplo: Lunes)");
                break;
}

