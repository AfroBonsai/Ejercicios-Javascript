// -> Ejercicios JavaScript - 1


/*
Autor: George Zamfir
Versión: 1.0
 */


// ---------------------------------------- Ejercicio 11 ----------------------------------------


// ---------- Input, Process & Output ----------

const expr = prompt("Introduce un día de la semana:");

switch (expr) {
        case "Lunes":
                alert("Lunes es laborable");
                break;

        case "Martes":
                alert("Martes es laborable");
                break;

        case "Miercoles":
                alert("Miercoles es laborable");
                break;

        case "Jueves":
                alert("Jueves es laborable");
                break;

        case "Viernes":
                alert("Viernes es laborable");
                break;

        case "Sabado":
                alert("Sabado no es laborable");
                break;

        case "Domingo":
                alert("Domingo no es laborable");
                break;

        default:
                alert("No es un valor correcto. (Ejemplo: Lunes)");
                break;
}

