
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/NavBar';
import "../style.css"
import { Link } from 'react-router-dom';
import remove from "../assets/bin.png"
import edit from "../assets/edit.png"



const Posts = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("https://blog-backend-dj9a.onrender.com/books");
                setBooks(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchAllBooks();
    }, []);
   console.log(books);

    const handleDelete = async (id)=>{
        try{
            await axios.delete("https://blog-backend-dj9a.onrender.com/books/"+id);
            window.location.reload()
        }catch(err){
            console.error(err)
        }
    }

    return (
        <>
        <Navbar />
        <div>
            <div className="posts">
                {books.map((book) => (
                    <div className="post" key={book.id}>
                        {<img src={book.cover} alt="" />}
                        
                        <div className="b-post">
                            <h2>{book.title}</h2>
                            <p>{book.desc}</p>
                            <button className="delete" onClick={()=>handleDelete(book.id)}>
                                <img src={remove} alt="Delete" />
                            </button>
                            <button className="update">
                                <Link to={`/update/${book.id}`}><img src={edit} alt="Delete"/></Link>
                            </button>
                        </div>
                        
                        </div>
                        
                ))}
            </div>
            
        </div>
        </>
    );
};

export default Posts;


