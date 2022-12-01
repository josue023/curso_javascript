let listaCompras = ["Leche", "Cereal", "Atún", "Pan"];

listaCompras.push("Aceite de Girasol");

listaCompras.pop();

let pelisFavoritas = [
    {titulo: "Ciudadano Kane", director: "Orson Welles", fecha: new Date(1941, 8, 5)},
    {titulo: "La regla del juego", director: "Jean Renoir", fecha: new Date(1939, 6, 8)},
    {titulo: "Cafarnaúm", director: "Nadine Labak", fecha: new Date(2018, 8, 20)}
];


const pelisPosteriores = pelisFavoritas.filter(obj => obj.fecha > new Date(2010, 0, 1));

const directores = pelisFavoritas.map((valor, indice) => `${indice + 1} - ${valor.director}`);

const titulosPelis = pelisFavoritas.map((valor, indice) => `${indice + 1} - ${valor.titulo}`);

const lista2 = directores.concat(titulosPelis);

const lista3 = [...directores, ...titulosPelis];

console.log(lista3)

