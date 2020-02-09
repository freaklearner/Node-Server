const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    if(req.url==="/"){
        res.setHeader("Content-Type","text/html");
        res.write("<html>");
        res.write("<head><title>My First node Response</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message' /><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    else if(req.url==='/message' && req.method==='POST'){
        fs.writeFileSync('message.txt','Test Message');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader("Content-Type","text/html");
    res.write("<html>");
    res.write("<head><title>My First node Response</title></head>");
    res.write("<body><h1>Response from node server!</h1></body>");
    res.write("</html>");
    res.end();
    // process.exit();
});

server.listen(3000);