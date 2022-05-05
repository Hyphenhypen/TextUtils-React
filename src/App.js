import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
  }
  
  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled","Success");
      setInterval(()=>{
        document.title = 'TextUtils is amazing';
      }, 1500)

      setInterval(()=>{
        document.title = 'Install TextUtils now';
      }, 2000)

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","Success");
      document.title = 'TextUtils-Light Mode';
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} > */}
          <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
          {/* <Route exact path="/about" element={<About/>} >
          </Route>
        </Routes> */}
            </div>
        {/* </Router> */}
            {/* <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
            {/* <About/> */}
      {/* <Textform heading="Enter the text to analyze below"/> */}
    </>
  );
}

export default App;