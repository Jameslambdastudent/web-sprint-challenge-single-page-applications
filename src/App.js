import React from "react";
import "./App.css";
import FormInputs from "./components/FormInputs"
import HomePage from "./components/HomePage";
import {BrowserRouter as Router, Route,} from "react-router-dom"
import NavBar from "./components/NavBar";



const App = () => {
  
  return (
    <Router>
      <NavBar />
    <Route path="/" exact component={HomePage} />
    <Route path="/formInputs" exact component={FormInputs} />
    </Router>
    
  )
};
  
export default App;
