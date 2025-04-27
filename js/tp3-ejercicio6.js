//6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//La fórmula del perímetro  es p = 2*(a +b)

function perimetro(a,b) {
    const resultado = 2 * (a + b);
    return resultado;
}

const ladoA = parseFloat(prompt('Ingrese el primer lado del rectángulo: '))
const ladoB = parseFloat(prompt('Ingrese el segundo lado del rectángulo: '))

if ((!isNaN(ladoA)) && (!isNaN(ladoB))){
    document.writeln(`El perímetro del rectángulo es ${perimetro(ladoA,ladoB)}`)
} else {
    document.writeln('Operación Inválida')
}
