import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Error from "./components/pages/Error";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
