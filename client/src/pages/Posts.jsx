import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/NavBar';
import "../style.css"


const Posts = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchAllBooks();
    }, []);

    return (
        <>
        <Navbar />
        <div>
            <div className="posts">
                {books.map((book, index) => (
                    <div className="post" key={book.id}>
                        {book.cover && <img src={book.cover} alt="" />}
                        <div className="picture">
                            <p>{book.cover}</p>
                        <div className="b-post">
                            <h2>{book.title}</h2>
                            <p>{book.desc}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        </>
    );
};

export default Posts;
