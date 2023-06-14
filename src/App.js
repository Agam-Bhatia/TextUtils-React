// import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert= (message, type) =>{
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout( () =>{
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState("light")
  const enableDark = () => {
    if (document.getElementById("flexSwitchCheckDefault").checked) {
      document.body.style.backgroundColor = "rgb(17 2 42)";
      document.body.style.color = "white";
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("light");
      showAlert("Light mode has been enabled", "success");
    }
  };
  const [red, setRed] = useState(null);
  const enableRed = () =>{
    document.body.style.backgroundColor = "rgb(217 18 34)";
    document.body.style.color = "black";
    showAlert("Red mode has been enabled", "success");
    setRed("red");
  }
  // const [color,setColor] = useState("light")
  // const toggleMode = () =>{
  //   if(mode === "light"){
  //     setMode("dark");
  //     // document.body.style.backgroundColor = "white";  // this line of code doesnt work on react now. It worked on older versions.
  //     document.body.setAttribute("data-bs-theme" , "dark"); // changes the background color of body to dark
  //   }
  //   else{
  //     setMode("light");
  //     // document.body.style.backgroundColor = "dark"; // this line of code doesnt work on react now. It worked on older versions.
  //     // document.body.setAttribute("data-bs-theme" , "light"); // changes the background color of body to light
  //   }
  // }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={enableDark} toggleRed={enableRed}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} red={red}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;