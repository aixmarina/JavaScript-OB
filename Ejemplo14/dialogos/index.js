const boton = document.querySelector("#btn")
// console.log(boton)

boton.addEventListener("click", () => {
    // alert("Se ha hecho click")
    confirm("¿Estás de acuerdo?")
        ? console.log("Ok")
        : console.log("NO!!")

    // const respuesta = confirm("Seguro¿?")
    // if (respuesta) {
    //     console.log("estás de acuerdo")
    // } else {
    //     console.log("NO estás de acuerdo")
    // }
})

const botonInfo = document.querySelector("#info")

botonInfo.addEventListener("click", () => {
    const nombre = prompt("Cuál es tu nombre?")
    if (nombre) {
        console.log("Tu nombre es " + nombre)
    } else {
        console.log("No has introducido nada")
    }

})

const lista = [{
    nombre: "marina",
    edad: 20
},
{
    nombre: "JuanJo",
    edad: 32
},
{
    nombre: "Isabel",
    edad: 27
}]

console.table(lista)
// console.log(lista)