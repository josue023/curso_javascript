function obtenerLista(num) {
    let lista = []
    lista[0] = 1
    lista[1] = 1

    for (let i = 2; i <= num - 1; i++) {

        lista[i] = lista[i-2] + lista[i-1] 
    }

    return lista
}

const array = obtenerLista(6)

console.log(array)

