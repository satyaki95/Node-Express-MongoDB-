const http = require('http');
const port = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req,res)=>{

    res.end("<h1>Hallo</h1>");
});

server.listen(port,hostName, ()=>{
    console.log(`surver is running at http://${hostName}:${port}`);
});