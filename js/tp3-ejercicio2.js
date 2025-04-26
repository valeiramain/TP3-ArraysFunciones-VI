//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
// cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

const ciudades = []
let ciudad = ""

//==============================
// FUNCIONES
//==============================
const mostrarArray = (titulo) => {
    document.writeln(`<h3>${titulo}</h3>`)
    document.writeln(`<ul>`)
    for (i = 0; i < ciudades.length; i++) {
        document.writeln(`<li>${ciudades[i]}</li>`)
    }
    document.writeln(`</ul>`)
}
//================================

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
    document.writeln(`<li>Elemento en 1era posición es: ${ciudades[0]}</li>`)
    document.writeln(`<li>Elemento en 3era posición es: ${ciudades[2]}</li>`)
    document.writeln(`<li>Elemento en última posición es: ${ciudades[ciudades.length - 1]}</li>`)

    // Añade en última posición la ciudad de París.
    ciudades.push('París')
    document.writeln(`<li>Nuevo Elemento en la última posición es: ${ciudades[ciudades.length - 1]}</li>`)
    document.writeln(`</ul>`)

    // Escribe por pantalla el elemento que ocupa la segunda posición.
    alert(`El elemento que ocupa la 2da posición es: ${ciudades[1]}`)
    document.writeln(`<br>`)
    mostrarArray(`Arreglo de Ciudades:`)

    // Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
    ciudades[1] = "Barcelona"
    mostrarArray(`Arreglo de Ciudades reemplazando 2da posición por BARCELONA:`)
} else {
    document.writeln('No hay ciudades para mostrar')
}