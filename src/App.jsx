import React from "react";
import "./App.css";
import Home from "./pages/Home";
// import Layout from "./components/Layouts/Layout";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Test from "./pages/Test";
import Detail from "./pages/Detail";
import Guard from "./components/Guard";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Guard>
              <Home />
            </Guard>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/test" element={<Test />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
