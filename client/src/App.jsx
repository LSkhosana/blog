import {BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/add" element={<Add/>} />
        <Route path="/update" element={<Update/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
