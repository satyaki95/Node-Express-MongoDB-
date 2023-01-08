const http = require('http');
const fs = require('fs');
const port = process.env.port;
const hostName = '127.0.0.1';

const server =  http.createServer((req,res)=>{

    const handelReadFile = (statusCode,fileName) =>{
        fs.readFile(fileName,(err,data)=>{
            res.writeHead(statusCode,{"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
    if(req.url === '/'){
        handelReadFile(200,"./Views/index.html");
    }
  else if(req.url === '/about'){
    handelReadFile(200,"./Views/about.html");
    } 
  else if(req.url === '/contac'){
    handelReadFile(200,"./Views/contac.html");
    }
    else{
        handelReadFile(404,"./Views/error.html");
    } 
})

server.listen(port,hostName,()=>{
    console.log(`server is running ${hostName}`);
})