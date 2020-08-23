import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectList from "./components/Projects/ProjectList";

function App() {
  return (
    <div className="App flex-col space-b">
      <Header />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
