const http = require("http");

const data = require("./data.js")

http.createServer((req, res) => {
    console.log(data);
    console.log(data.data.titulo);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data.data.titulo + data.data.subtitulo+ data.data.descripcion);
    return res.end();
}).listen(8080);
