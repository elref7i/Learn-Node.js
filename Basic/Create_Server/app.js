const http = require("http");
const fs = require('fs');

//EX 1

const server = http.createServer((req,res)=>{
    const URL = req.url;
    res.setHeader('Conte-type','text/html');
    res.write("<html>")
    res.write('<head><title>Node</title></head>');
    res.write('<body>');
        res.write('<h1>Hello node js</h1>');
        res.end();
    res.write('</body>');
    
    res.write("</html>");
    res.end();
});
server.listen(3000);


//EX 2 

/*

const htmlpage =fs.readFileSync('./view/index.html','utf8');
const cssfile =fs.readFileSync('./view/style.css','utf8');
const server = http.createServer((req,res)=> {
    const URl = req.url;
    if (URl === '/'){
        res.write(htmlpage)
    }
    else if (URl === '/style.css' ){
        res.write(cssfile)
    }
    else{
        res.write("dsssss")
    }
    res.end();
})
server.listen(3000);

*/



