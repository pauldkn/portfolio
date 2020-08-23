import React from "react";
import "./styles/App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Greetings from "./components/Greetings";

function App() {
  return (
    <div className="App flex-col">
      <Navbar />
      <div className="flex-col">
        <Greetings />
        <Button text={"View my work →"} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
