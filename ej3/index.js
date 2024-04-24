const esPar = require("./numeros.js");
const Logger = require('logplease');
const logger = Logger.create('utils');

console.log(esPar.esPar(4));



logger.info(esPar.esPar(2));
logger.info(esPar.esPar(202));
logger.info(esPar.esPar(100));
logger.error(esPar.esPar(3));
logger.error(esPar.esPar(101));
logger.error(esPar.esPar(201));