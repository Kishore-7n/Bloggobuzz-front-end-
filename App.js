import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Bg from "./Components/Bg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import PostPreview from "./Components/PostPreview";
import Contact from "./Components/Contact";
import Mainpost from "./Components/Mainpost";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div> 
      <Routes>
        <Route path="/" element={<Bg />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/newblog" element={<Form />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/postpreview" element={<PostPreview />}></Route>
        <Route path="/mainpost" element={<Mainpost />}></Route>
      </Routes>
    </Router>
  );
}
