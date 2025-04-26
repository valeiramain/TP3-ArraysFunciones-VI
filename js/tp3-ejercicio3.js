//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
// para cada uno de los lanzamientos de los dados. 
// Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.


function numeroAleatorio() {
    return Math.floor(Math.random( (6) + 1));
}

// const apariciones = [0,0,2,3,4,5,6,7,8,9,10,11,12]
const apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0]

for (let i = 1; i <= 5; i++) {
    const dado1 = numeroAleatorio();
    const dado2 = numeroAleatorio();
    const suma = dado1 + dado2
    console.log('i: '+i)
    console.log("dado1: " + dado1 + "  dado2: " + dado2)
    console.log("suma =" + suma)
    apariciones[suma] = apariciones[suma] + 1
    console.log(apariciones)
}