const http = require('http');
const host ='127.0.0.1';
const port = 3000;

//Método nativo createServer : cria um servidor
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Contente-Type', 'text/plain');
    res.end('Ola, Mundo. \nMeu primeiro Script.')
});

server.listen(port, host,  ()=>{
    console.log(`Server rodando em http://${host}:${port}`)
});