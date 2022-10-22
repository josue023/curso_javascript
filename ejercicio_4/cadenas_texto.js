let nombre = "Josue";
let apellido = "Junco";
let estudiante = nombre.concat(" ", apellido);

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let numLetras = estudiante.length;
console.log(numLetras);

let primerLetra = estudiante.charAt();
let ultimaLetra = estudiante.charAt(estudiante.length - 1);
console.log(ultimaLetra)

console.log(estudiante.replace(" ", ""));

let comprobarNombre = estudiante.includes("Josue")
console.log(comprobarNombre)
