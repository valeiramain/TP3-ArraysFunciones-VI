// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y
//  devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.



function parImpar(nro) {
    let resultado = 0
    if (nro % 2 === 0) {
        resultado = 0
    } else {
        resultado = 1
    }
    return resultado;
}

const numero = parseInt(prompt('Ingrese un número entero: '))

if ((!isNaN(numero)) && (numero !== null)) {
    if (parImpar(numero) === 0) {
        document.writeln(`El número ingresado ${numero} es PAR`)
    } else {
        document.writeln(`El número ingresado ${numero} es IMPAR`)
    }
}else{
    document.writeln('Operación Invalida')
}