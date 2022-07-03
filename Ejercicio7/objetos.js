/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

const objeto = {
    nombre: "Marina",
    apellido: "Aix",
    edad: 20,
    altura: 165,
    eresDesarrollador: true
}

const edad = objeto.edad

const lista = [
    {
        ...objeto
    }, {
        nombre: "Marina",
        apellido: "Hernández",
        edad: 21,
        altura: 165,
        eresDesarrollador: false
    }, {
        nombre: "Eloy",
        apellido: "Martínez",
        edad: 20,
        altura: 170,
        eresDesarrollador: false
    }
]

const lista_ordenada = lista.sort((a, b) => b.edad - a.edad)

console.log(lista_ordenada)