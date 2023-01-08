const http = require('http');
const port = 3000;
const hostName = '127.0.0.1';

const myServer = http.createServer((req,res)=>{
    res.writeHead(202,{'Const-Type':'text/plain'});
    res.write("<h1>Helll</h1>");
    res.end();
});

myServer.listen(port,hostName, ()=>{
    console.log(`surver running at ${hostName}:${port}`);
});