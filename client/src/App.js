import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogsProvider from "./context/BlogsContext";

function App() {
  return (
    <BlogsProvider>
    <div className="App">
      <Header />
      {/* Define your routes */}
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        {/* The home route should come last */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
    </BlogsProvider>
  );
}

export default App;
