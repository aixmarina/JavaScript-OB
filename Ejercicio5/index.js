/*
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/

let altura_cm = 165
let altura_m = 1.65
let peso_kg = 65.2

let altura_red = Math.ceil(altura_m)
let peso_red = Math.floor(peso_kg)

let bool = Number.MAX_VALUE + 1 === Number.MAX_VALUE