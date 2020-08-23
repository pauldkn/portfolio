import React from "react";
import "./styles/App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

function App() {
  return (
    <div className="App flex-col">
      <Navbar />
      <div className="hello flex-col">
        <h1>Hello World</h1>
        <Button text={"View my work →"} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
