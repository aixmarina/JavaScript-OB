// localStorage.setItem("nombre", "Marina")
// localStorage.setItem("nombre", "JuanJo")

// console.log(localStorage.getItem("nombre")) +
//     localStorage.setItem("persona", JSON.stringify({ nombre: "marina", edad: 19 }))
// console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify => convierte un objeto/array en un string
// JSON.parse => convierte un objeto/array convertido a través de stringify en un objeto de JavaScript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Gorka")

// cookies

document.cookie = "nombreCookie=GorkaCookie"
document.cookie = "nombreCaducidad=Nombre;expires= " + new Date(2023, 0, 1).toUTCString()
console.log(document.cookie)