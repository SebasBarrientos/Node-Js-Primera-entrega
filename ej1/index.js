const http = require("http");


http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  console.log("Aprendiendo en The Bridge!") 
  res.end("Aprendiendo en The Bridge!");
})
  .listen(8080);