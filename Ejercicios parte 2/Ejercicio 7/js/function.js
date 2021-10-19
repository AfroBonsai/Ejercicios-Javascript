// -> Ejercicios JavaScript - 2


/*
Author: George Zamfir
Version: 1.0
 */


// ---------------------------------------- Ejercicio 7 ----------------------------------------


// ---------- Input ----------

let euros = parseFloat(prompt("Introduce la cantidad de euros para cambiar:"));

let moneda = prompt("Introduce la moneda a cambiar:");

const libras = 0.86;
const dolares = 1.28611;
const yenes = 129.852;

// ---------- Process ----------

moneda = moneda.toLowerCase();

const cambioDivisa = (euros, moneda) => {

    if (euros > 0 && typeof euros == 'number') {

        switch (moneda) {
            case "libras":
                console.log(euros + " € son " + euros * libras + " libras.");
                alert(euros + " € son " + euros * libras + " libras.");
                break;
            case "dolares":
                console.log(euros + " € son " + euros * dolares + " dólares.");
                alert(euros + " € son " + euros * dolares + " dólares.");
                break;
            case "yenes":
                console.log(euros + " € son " + euros * yenes + " yenes.");
                alert(euros + " € son " + euros * yenes + " yenes.");
                break;
            default:
                console.log("no has introducido una moneda correcta. nPosibles opciones: n1: Libras n2.Dolares n3. Yenes");
                alert("no has introducido una moneda correcta. Posibles opciones: \n1. Libras \n2. Dolares \n3. Yenes");
        }
    } else {
        console.log("La moneda tiene que ser un número positivo");
        alert("La moneda tiene que ser un número positivo");

    }
}

cambioDivisa(euros, moneda);



// ---------- Output ----------