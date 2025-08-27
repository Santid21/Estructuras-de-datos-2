//Funcion Regular//
function checkNumberRegular(num) {
    if (num % 2 === 0) {
        console.log(num + " Es par");
    } else {
        console.log(num + " Es impar");
    }
}


checkNumberRegular(4); 
checkNumberRegular(7); 

//Funcion Arrow//
const checkNumberArrow = num => {
    if (num % 2 === 0) {
        console.log(num + "Es Par");
    } else {
        console.log(num + "Es Impar");
    }
}
checkNumberArrow(4); 
checkNumberArrow(7); 