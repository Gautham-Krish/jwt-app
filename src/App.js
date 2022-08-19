import React from "react";
import "./App.css";
import "./Design.css";
import "./Navbar";
import Form from "./components/Form";
import Navbar from "./Navbar";
import HelloWorld from "./components/HelloWorld";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = (
        <>
          <Form />
        </>
      );
      break;

    case "/signup":
      Component = <Form />;
      break;

    case "/hello-world":
      Component = <HelloWorld />;
      break;
  }
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/signup" element={<Form />} />
          <Route path="/hello-world" element={<HelloWorld />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
