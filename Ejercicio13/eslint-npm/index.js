// Crea un nuevo proyecto de Node
//Duplica el archivo del ejercicio de la sesión 04 - Textos
//Utiliza los tres estilos de comillas de forma alterna(comillas simples, dobles, backticks)
//Crea el fichero .eslintrc.json
//Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
//Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
//Crea un script en el package.json para corregir automáticamente todos los errores
//Ejecuta el script a través del terminal

//archivo sesion 04 - textos 

let nombre = "Marina del Carmen"
let apellido = "Aix Gómez"

//también 
// let estudiante = nombre.concat(" ").concat(apellido)
let estudiante = `${nombre} ${apellido}`

let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

let numEst = estudiante.length

let first_nom = nombre.slice(0, 1)
let last_app = apellido.slice(apellido.length - 1, apellido.length)

let estudiante_2 = estudiante.replace(/ /g, "")

let nombreEstudiante = estudiante.includes(nombre)

