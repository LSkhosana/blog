import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://blog-backend-dj9a.onrender.com/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Add New Post</h1>
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
      <button onClick={handleClick}>Add Post</button>
      {error && "Something went wrong!"}
      <button><Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}>See All Posts</Link></button>
      </div>
    </div>
  );
};

export default Add;