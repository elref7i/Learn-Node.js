// lubuv --> (file i/o) ---> thread pool  

// thread pool --> 

const fs = require('fs');
const crypto = require('crypto');

        //  -------------------------------------****************--------------------------------------


//bolcking = sync

/*

// console.log("Start");

// const readFile = fs.readFileSync("./message.txt",'utp8');

// console.log(readFile);

// console.log("End");

*/

        //  -------------------------------------****************--------------------------------------

//non-bolcking = async

/*
console.log("Start");
fs.readFile("./message.txt","utf8",(err,data) =>{
if (err){

    console.log(`the error ${err}`)

}else{
    console.log(`read file ${data}`)
}
});
console.log("end");
*/

        //  -------------------------------------****************--------------------------------------

// write file Sync

/*

fs.writeFileSync("./message2.json",JSON.stringify("./message.txt"),'utf8',(err,data) =>{
if (err){
    console.log(`error : ${err}`);
}else{
    console.log(`done  ${data}`);
}

});

*/
''
        //  -------------------------------------****************--------------------------------------


//Write File async

/*

fs.writeFile("./message2.txt","ahmed-refai",'utf8',(err,data)=>{
    if (err){
        console.log(`error : ${err}`);
    }else{
        console.log(`done  ${data}`);
    }
    
})
*/
        //  -------------------------------------****************--------------------------------------

// delete File blocking

/*

fs.unlinkSync('./test_delete2.txt');

*/

        //  -------------------------------------****************--------------------------------------
// delete File non-blocking


/*

fs.unlink("./test_delete.txt",(err)=>{
if (err){
    console.log(`error ${err}`);
}
});

*/

////////////////////////////  Stream [Readablem,Writeabale]   //////////////////////////////////
/*


// const ReadFileS=  fs.createReadStream('./read_strem.txt','utf8');
// const WriteFileS=  fs.createWriteStream('./write_strem.txt','utf8');
// ReadFileS.on('data',(chunk)=>{
//     console.log(`== chunk==== ${chunk}`);
//     WriteFileS.write(`\n == chunk====  \n  ${chunk}`);
//     WriteFileS.write(chunk);
// });


*/


// If you want to understand block code, follow the example
/*
const crypto = require('crypto');
process.env.UV_THREADPOOL_SIZE =5;
const start = performance.now();


crypto.pbkdf2Sync("secret",'salt',10000,64,'sha512');

console.log(performance.now() - start);

crypto.pbkdf2Sync("secret",'salt',10000,64,'sha512');

console.log(performance.now() - start);
crypto.pbkdf2Sync("secret",'salt',10000,64,'sha512');

console.log(performance.now() - start);

crypto.pbkdf2Sync("secret",'salt',10000,64,'sha512');

console.log(performance.now() - start);

*/


/*
process.env.UV_THREADPOOL_SIZE =5;
const start = performance.now();


crypto.pbkdf2("secret",'salt',10000,64,'sha512',()=>{
    console.log(performance.now() - start);
});

crypto.pbkdf2("secret",'salt',10000,64,'sha512',()=>{
    console.log(performance.now() - start);
});
crypto.pbkdf2("secret",'salt',10000,64,'sha512',()=>{
    console.log(performance.now() - start);
});



*/