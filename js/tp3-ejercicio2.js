//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
// cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

const ciudades = []
let ciudad = ""
do {
    ciudad = prompt("Ingrese el nombre de una Ciudad: ")
    console.log('ciudad ingresada: ' + ciudad)
    if (ciudad !== undefined && ciudad !== "" && ciudad !== null) {
        ciudades.push(ciudad)
        console.log('ciudades:' + ciudades)
    } else {
        alert('Operación Inválida')
    }
} while (confirm("¿Desea continuar cargando Ciudades?"));

if (ciudades.length > 0) {
    // Mostrar la longitud del arreglo.
    document.writeln(`<p>El arreglo de ciudades tiene: ${ciudades.length} elementos.<br>`

    )
    // Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
    document.writeln(`<ul>`)
    document.writeln(`<li>Elemento en 1era posición: ${ciudades[0]}</li>`)
    document.writeln(`<li>Elemento en 3era posición: ${ciudades[2]}</li>`)
    document.writeln(`<li>Elemento en última posición: ${ciudades[ciudades.length - 1]}</li>`)

    // Añade en última posición la ciudad de París.
    ciudades.push('París')
    document.writeln('<br>')
    document.writeln(`<li>Nuevo Elemento en la última posición: ${ciudades[ciudades.length - 1]}</li>`)
    document.writeln(`</ul>`)

    // Escribe por pantalla el elemento que ocupa la segunda posición.
    alert(`El elemento que ocupa la 2da posición es: ${ciudades[1]}`)

    // Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
    ciudades[1] = "Barcelona"

    document.writeln(`<br><h3>Arreglo de Ciudades</h3>`)
    document.writeln(`<ul>`)
    for (i = 0; i < ciudades.length; i++) {
        document.writeln(`<li>${ciudades[i]}</li>`)
    }
    document.writeln(`</ul>`)
}
