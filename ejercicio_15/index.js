const nombre = "Josue"
const apellido = "Junco"

const persona = {
    nombre: nombre,
    apellido: apellido
}

//sessionStorage.setItem("persona-session", JSON.stringify(persona))

console.log(sessionStorage.getItem("persona"))


//localStorage.setItem("persona", JSON.stringify(persona))

console.log(sessionStorage.getItem("persona"))

var date = new Date()
date.setTime(date.getTime()+(2*60*1000))

document.cookie = `personaCookie=${JSON.stringify(persona)}; expires=` + date.toUTCString()