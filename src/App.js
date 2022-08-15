import React from "react";
import "./App.css";
import "./Design.css";
import "./Navbar";
import Form from "./components/Form";
import Navbar from "./Navbar";

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
  }
  return (
    <>
      <Navbar />

      {Component}
    </>
  );
}

export default App;
