// Funcion Regular//

function verificarNumeroRegular(num) {
    if (num % 2 === 0) {
        console.log(num + " es Par");
    } else {
        console.log(num + " es Impar");
    }
}

verificarNumeroRegular(4); // 4 es Par
verificarNumeroRegular(7); // 7 es Impar

//Funcion flecha//
const verificarNumeroFlecha = (num) => {
    if (num % 2 === 0) {
        console.log(num + " es Par");
    } else {
        console.log(num + " es Impar");
    }
}

verificarNumeroFlecha(10); // 10 es Par
verificarNumeroFlecha(15); // 15 es Impar
