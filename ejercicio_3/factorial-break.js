let factorial = 1;
let i = 2;

while (i < 20) {
    factorial *= i;

    if (i == 10) {
        break;
    }

    i++;
}

console.log("El factorial de 10 es: ", factorial)
