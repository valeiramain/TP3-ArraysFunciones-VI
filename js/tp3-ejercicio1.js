//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
//  Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Septiembre','Octubre','Noviembre','Diciembre']

document.writeln(`<h2>Lista de Meses</h2>`)

document.writeln(` <ul>`)

for (let i = 0; i < meses.length; i++) {
    document.writeln(`<li>${meses[i]}</li>`)
    }
document.writeln(`</ul>`)
