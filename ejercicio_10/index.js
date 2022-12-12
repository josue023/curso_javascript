import * as operaciones from "./modulos/controller.js"
import chalk from 'chalk';

const resultado = operaciones.multiplica(operaciones.suma(1, 2), operaciones.suma(4, 5));


console.log(chalk.magenta(resultado));