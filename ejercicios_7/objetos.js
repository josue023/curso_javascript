const datosPersonales = {
    nombre: "Josue",
    apellido: "Junco",
    edad: 26,
    altura: 1.70,
    eresDesarrollador: true
}

const prop = "edad";
console.log(datosPersonales[prop])

const mejoresAmigos = [
    {nombre: "Carlos", apellido: "Alvaro", edad: 21, altura: 1.76, eresDesarrollador: "false"},
    {nombre: "Juan", apellido: "Ramirez", edad: 28, altura: 1.67, eresDesarrollador: "true"},
]

const lista = [{...datosPersonales}, ...mejoresAmigos]

lista.sort((a, b) => b.edad - a.edad)

console.log(lista)

