
# Trabajo Practico N°3

# Prácticas con arreglos y funciones

> **Importante:**
>
> Para ejecutar cada ejercicio, debe desmarcar el archivo tp3-ejercicioX.js que corresponda en index.html y ejecutarlo con liveServer.

## Arrays

### Dificultad: 🟢

**1.** Crear un array llamado `meses` que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

**Output esperado:**  
_(mostrar los 12 meses en una lista)_

---

### Dificultad: 🟢🟡

**2.** Crear un script que solicite al usuario mediante un `prompt` el nombre de ciudades y las almacene en un arreglo. Cuando el usuario seleccione cancelar, se debe mostrar el arreglo generado. Luego realizar las siguientes acciones:

- Mostrar la longitud del arreglo.
- Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
- Añadir en última posición la ciudad de **París**.
- Escribir por pantalla el elemento que ocupa la segunda posición.
- Sustituir el elemento que ocupa la segunda posición por la ciudad de **Barcelona**.

**Ejemplo:**

**Input:**
```javascript
['Nueva York, Estados Unidos', 'Barcelona, España', 'Tokio, Japón', 'Londres, Reino Unido', 'Roma, Italia', 'Pekín, China', 'Río de Janeiro, Brasil', 'Ámsterdam, Países Bajos', 'Sídney, Australia', 'El Cairo, Egipto']
```

**Output esperado:**  
Mostrar en forma de lista:

El arreglo tiene X elementos

- Elemento en 1era posición es:
- Elemento en 3era posición es:
- Elemento en última posición es:
- Elemento en última posición es: PARIS

### ARREGLO DE CIUDADES
mostrar cada elemento del array en forma de lista anteponiendo la palabra "Elemento:"

---

### Dificultad: 🟢🟡🔴

**3.** Escribir un script que simule el lanzamiento de dos dados.  
Utilizar la función `Math.random()` para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos.  
Sumar el resultado de los dos dados y anotar en un array el número de apariciones de cada suma, repitiendo esta operación 50 veces.

**Ejemplo de salida:**  
En una tabla de 2 columnas mostrar en una columna el resultado de la suma de los 2 dados, y en la otra columna la cantidad de apariciones de esa suma en los 50 intentos.

| Suma🎲🎲 | Apariciones |
|-----------|------------|
| 2         | 1          |
| 3         | 5          |
| 4         | 5          |
| 5         | 4          |
| 6         | 8          |
| 7         | 6          |
| 8         | 5          |
| 9         | 5          |
| 10        | 3          |
| 11        | 6          |
| 12        | 2          |
---

## Funciones

### Dificultad: 🟢

**4.** Escribir una función a la que se pase como parámetro un número entero y devuelva una cadena de texto que indique si el número es par o impar.  
Mostrar el resultado devuelto por la función por pantalla.

---

### Dificultad: 🟢🟡

**5.** Definir una función que muestre información sobre una cadena de texto pasada como argumento.  
La función debe determinar si la cadena está formada:
- Sólo por mayúsculas,
- Sólo por minúsculas, o
- Por una mezcla de ambas.

---

### Dificultad: 🟢🟡

**6.** Solicitar al usuario el ingreso de los lados de un rectángulo.  
Crear una función para calcular su **perímetro** y mostrarlo por pantalla.

La fórmula del perímetro es:

```
p = 2 * (a + b)
```

**Ejemplo:**

**Input:**
```
lado A = 24
lado B = 5
```

**Output:**
```
58
```

---

### Dificultad: 🟢🟡

**7.** Escribir un script que muestre la **tabla de multiplicar** de un número ingresado por el usuario.  
La tabla debe ser generada con una función y mostrar los resultados del 1 al 10 del número elegido.

---
