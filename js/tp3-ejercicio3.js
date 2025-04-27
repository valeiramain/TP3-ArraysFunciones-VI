//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
// para cada uno de los lanzamientos de los dados. 
// Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.



function numeroAleatorio() {
    return Math.floor(Math.random() * 6 + 1);
}

const apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for (let i = 0; i < 50; i++) {
    console.log('tironro: ' + i)
    const dado1 = numeroAleatorio();
    const dado2 = numeroAleatorio();
    const suma = dado1 + dado2
    console.log("dado1:" + dado1 + "dado2:" + dado2)
    console.log("suma" + suma)
    apariciones[suma] = apariciones[suma] + 1
    console.log(apariciones)
}


//mostrar tabla

document.writeln(
    `<table>
        <thead>
            <tr>
                <th>Suma 🎲🎲</th>
                <th>Apariciones</th>
            </tr>
        </thead>
        <tbody>`);


for (let i = 2; i <= 12; i++) {
    document.writeln(`<tr>`)
    document.writeln(`<td>${i}</td>`)
    document.writeln(`<td>${apariciones[i]}</td>`)
    document.writeln(`</tr>`)
}

document.writeln(`
        </tbody>
    </table>`)



