// -> Ejercicios JavaScript - 2


/*
Author: George Zamfir
Version: 1.0
 */


// ---------------------------------------- Ejercicio 7 ----------------------------------------


// ---------- Input ----------

let euros = parseFloat(prompt("Introduce la cantidad de euros para cambiar:"));

let moneda = prompt("Introduce la moneda a cambiar:");

const LIBRAS = 0.86;
const DOLARES = 1.28611;
const YENES = 129.852;

// ---------- Process ----------

moneda = moneda.toLowerCase();

const cambioDivisa = (euros, moneda) => {

    if (euros > 0 && typeof euros == 'number') {

        switch (moneda) {
            case "libras":
                console.log(euros + " € son " + euros * LIBRAS + " £.");
                alert(euros + " € son " + euros * LIBRAS + " £.");
                break;
            case "dolares":
                console.log(euros + " € son " + euros * DOLARES + " $.");
                alert(euros + " € son " + euros * DOLARES + " $.");
                break;
            case "yenes":
                console.log(euros + " € son " + euros * YENES + " ¥.");
                alert(euros + " € son " + euros * YENES + " ¥.");
                break;
            default:
                console.log("No has introducido una moneda correcta (libras, dólares, yenes)");
                alert("No has introducido una moneda correcta. Posibles opciones: \n1. Libras \n2. Dólares \n3. Yenes");
        }
    } else {
        console.log("La moneda tiene que ser un número positivo.");
        alert("La moneda tiene que ser un número positivo.");

    }
}

// ---------- Output ----------

cambioDivisa(euros, moneda);

