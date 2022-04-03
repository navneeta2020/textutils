// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils- Light Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is an amazing app";
      // }, 1200);

      // setInterval(() => {
      //   document.title = "Please install TextUtils";
      // }, 1500);
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#2c3251';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils- Dark Mode";
    }

    // setInterval(() => {
    //   document.title = "TextUtils is an amazing app";
    // }, 1200);

    // setInterval(() => {
    //   document.title = "Please install TextUtils";
    // }, 1500);
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm heading="Enter Text to Analyze" mode={mode} showAlert={showAlert} />
        {/* <Routes>
            <Route path="/" element={<TextForm heading="Enter Text to Analyze" mode={mode} showAlert={showAlert} />} />

            <Route path="/about" element={<About />} />

          </Routes> */}

      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
