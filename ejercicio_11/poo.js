class Estudiante{
    #nombre
    asignaturas

    constructor(nombre){
        this.#nombre = nombre
        this.asignaturas = ["Javascript", "HTML", "CSS"]
    }

    obtenDatos(){
        return {
            nombre: this.#nombre,
            asignaturas: this.asignaturas
        }
    }
}

const estudiante1 = new Estudiante("Josué")

console.log(estudiante1.obtenDatos())
