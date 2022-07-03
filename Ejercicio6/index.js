/* 
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

let lista_compra = ["cebolla", "champiñón", "salchichas", "nutella", "patatas"]

lista_compra.push("Aceite de girasol")
lista_compra.pop()

let peliculas = [
    {
        titulo: "Un puente hacia terabithia",
        director: "Gábor Csupó",
        fecha: new Date(2007, 7, 3)
    },
    {
        titulo: "Historia de un matrimonio",
        director: "Noah Baumbach",
        fecha: new Date(2019, 9, 29)
    },
    {
        titulo: "Sinister",
        director: "Scott Derrickson",
        fecha: new Date(2012, 9, 26)
    }
]

let peliculas1 = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

let directores = peliculas.map(peliculas => peliculas.director)

let titulos = peliculas.map(peliculas => peliculas.titulo)

let dir_tit = titulos.concat(directores)

let dir_tit2 = [...titulos, ...directores]
