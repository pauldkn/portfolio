import React from "react";
import { Switch, Route } from "react-router-dom";
import './FontAwesome/fontAwesome'
import "./styles/App.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Views/Home";
import About from "./components/Views/About";

function App() {
  return (
    <div className="App flex-col space-b">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
