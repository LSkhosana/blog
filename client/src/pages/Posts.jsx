import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div>
            <h1>Blog</h1>
            <div className="books">
                {books.map((book, index) => (
                    <div className="book" key={book.id}>
                        {book.cover && <img src={book.cover} alt="" />}
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <p>{book.cover}</p>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">Add New Post</Link>
            </button>
        </div>
    );
};

export default Posts;
