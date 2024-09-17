import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from 'mysql2';

// Configure dotenv to load .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    connectTimeout: 30000,
  });



app.get("/", (req,res)=>{
    res.json("hello this is the back end")
})

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) {
            console.log(err)
            return res.json(err)
        }
        return res.json(data)
    });
});

app.post("/books", (req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES(?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover
    ];

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
});

app.delete("/books/:id", (req,res)=>{
    const bookID = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q,[bookID], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.put("/books/:id", (req,res)=>{
    const bookID = req.params.id;
    const q = "UPDATE books SET  `title`= ?, `desc`= ?, `cover`= ?, WHERE id = ?";

    const values =[
        req.body.title,
        req.body.desc,
        req.body.cover
    ];

    db.query(q,[...values,bookID], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
});

app.listen(8800, ()=>{
    console.log("Connected to backend!")
});


