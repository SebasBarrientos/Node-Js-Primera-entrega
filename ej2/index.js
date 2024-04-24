
// Hola Mundo de Node (usando el método debug)
// Noticias de última hora, Node.js me encanta!! (usando el método info)
// Tirando warnings como campeones (usando el método warn)
// Algo no está bien!!! (usando el método error)
const http = require("http");
const Logger = require('logplease')
const logger = Logger.create('utils');
logger.debug(`Hola Mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta!! `);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!`);



http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(logger.debug(`Hola Mundo de Node`),
    logger.info(`Noticias de última hora, Node.js me encanta!! `),
    logger.warn(`Tirando warnings como campeones`),
    logger.error(`Algo no está bien!!`));
  })
  .listen(8080);