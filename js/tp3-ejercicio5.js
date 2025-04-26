//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


function MayusculasMinusculas(frase) {
    // resultado = 0 Mayusculas
    // resultado = 1 minusculas
    // resultado = 2 ambas
    let resultado = 0
    if (frase === frase.toUpperCase()) {
        resultado = 0;
    } else if (frase === frase.toLowerCase()) {
        resultado = 1;
    } else {
        resultado = 2;
    }
    return resultado;
}

const texto = prompt("Ingrese un texto: ");
console.log(texto)
if ((texto !== "") && (texto !== null)) {
    switch (MayusculasMinusculas(texto)) {
        case 0:
            document.writeln(`La cadena ingresada están formada sólo por Mayúsculas`)
            break;
        case 1:
            document.writeln(`La cadena ingresada están formada sólo por Minúsculas`)
            break;
        case 2:
            document.writeln(`La cadena ingresada están formada por Mayúsculas y Minúsculas`)
            break;
        default:
            document.writeln("Operación inválida")
    }
} else {
    document.writeln("Operación inválida")
}


