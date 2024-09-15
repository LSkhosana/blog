import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Lesed1skh05",
    database:"test"
})

//ALTER USER 'root'@'localhost' IDENDIFIED WITH mysql_native_password BY '@Lesed1skh05'

app.use(express.json())

app.get("/", (req,res)=>{
    res.json("hello this is the back end")
})

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES(?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover
    ];

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Post succesful.")
    });
});

app.listen(8800, ()=>{
    console.log("Connected to backend!")
});