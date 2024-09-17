import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const Update = () => {
    const [book,setBooks] = useState({
        title: "",
        desc: "",
        cover: "",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const bookId = location.pathname.split("/")[2]

    const handleChange = (e) =>{
        setBooks((prev)=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault();
        try{
            await axios.put("https://blog-backend-dj9a.onrender.com/books/"+ bookId, book)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(book)
  return (
    <>

<div className="form">
      <h1>Update Post</h1>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={8}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      />
      <div className="btns">
      <button onClick={handleClick}>Update Post</button>
      <button><Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}>See All Posts</Link></button>
      </div>
    </div>
    </>
  );
};

export default Update

