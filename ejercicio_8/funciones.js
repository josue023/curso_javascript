
function valor () {
    return true
}

console.log(valor())


//funciones asincronas
const miPromesa = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(resolve(), 5000)
    }
})

miPromesa
    .then(()=> console.log("Hola soy una promesa"))


//funciones generadoras
function* iPar(){
    let i = 0;
    while (true) {
        i++
        if (i === 10) {
            return i
        }
        
        if (i%2 === 0) {
            yield i
        }
        
    }
}

const genPar = iPar();

console.log(genPar.next().value)
console.log(genPar.next().value)
console.log(genPar.next().value)
console.log(genPar.next().value)
console.log(genPar.next().value)