const miFuncion = val => {
    if (val === true) {
        const mensaje = "este es un mensaje";
        return  mensaje
    }
    throw new Error("Este es un error");
}

try {
    miFuncion(false)
} catch (e) {
    const winston = require('winston');

    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
            //
            // - Write all logs with importance level of `error` or less to `error.log`
            // - Write all logs with importance level of `info` or less to `combined.log`
            //
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
        ],
    });

    logger.error(`${e}`);

}
