const f_hoy = new Date()

const f_nacimiento = new Date(1996, 4, 8)

let comprobacion = f_hoy > f_nacimiento

const diaNacimiento = f_nacimiento.getDate()
const mesNacimiento = f_nacimiento.getMonth() + 1 
const anioNacimiento = f_nacimiento.getFullYear()

console.log(anioNacimiento)
