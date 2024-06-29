const  express = require("express");
const  mysql = require("mysql2");


const port =3000;
const app = express();
const query = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password: '',
    database:'week-3'
}) 

app.use(express.json({}))
app.get('/',(req,res,next)=>{
    // query.execute('update users set name="hambos" where id=3')
    // query.execute('delete from users where id = 3')
    query.execute('select *from users',(err,data)=>{
        return res.json(data)
    })
    // res.json("ahmed refai")

//Cannot set headers after they are sent to the client ===> error

})

//ADD
app.post('/adduser',(req,res,next)=>{
    const {name,email,password} = req.body;
    query.execute(`insert into users (name,email,password) values ("${name}" , "${email}","${password}")`)
    return res.json({message:"success add"})
})
//update
app.put('/updateuser',(req,res,next)=>{
    const {name,id} = req.body;
    query.execute(`update users set name="${name}" where id=${id}`)
    return res.json({message:"success update"})

})
//Delete
app.delete('/deleteuser',(req,res,next)=>{
    const {id} = req.body
    query.execute(`delete from users where id = ${id}`)
    return res.json({message:"success delete"})

})
//search
app.listen(port,()=>{
    console.log("Run");
})
