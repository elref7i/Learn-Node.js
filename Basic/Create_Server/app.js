const http = require("http");
const fs = require('fs');

//EX 1

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

const htmlpage =fs.readFileSync('./view/index.html','utf8');
const cssfile =fs.readFileSync('./view/style.css','utf8');
const server = http.createServer((req,res)=> {
    const URl = req.url;
    if (URl === '/'){
        res.write(htmlpage);
    }
    else if (URl === '/style.css' ){
        res.write(cssfile)
    }
    else if (URl === '/message'){
        res.write("<h1>default</h1>");
    }
    else{
        res.write("not foound");
    }
    res.end();
})
server.listen(3000);





