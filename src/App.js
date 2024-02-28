import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [defaultMode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const darkMode = () => {
    if (defaultMode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(32 34 44)';
      document.body.style.color = 'white';
      document.title = "Textutils - Dark Mode";
      showAlert("Dark mode has been enabled!", 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = "Textutils - Light Mode";
      showAlert("Light mode has been enabled!", 'success');
    }
  }
  const redMode = () => {
    if (defaultMode === 'red') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = "Texutils - Light Mode";
      showAlert("Light mode has been enabled!", 'success');

    }
    else {
      setMode('red');
      document.body.style.backgroundColor = '#4d2424';
      document.body.style.color = 'white';
      document.title = "Textutils - Red Mode";
      show_Alert("Red mode has been enabled!", 'danger');
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setInterval(() => {
      setAlert(null);
    }, 3000);
  }
  const show_Alert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setInterval(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" about="About Textutils" mode={defaultMode} toggleMode={darkMode} mode_2={defaultMode}
          toggle_Mode={redMode} />
        <Alert alert={alert} />
        <div className="container py-4 my-10">
          <Routes>
            <Route exact path='/About' element={<About />}></Route>
            <Route exact path='/Textform' element={<TextForm heading="Enter Your Text Here" showAlert={showAlert} show_Alert={show_Alert} />}></Route>
          </Routes>
        </div>
          <TextForm heading="Enter Your Text Here" showAlert={showAlert} show_Alert={show_Alert} />
      </Router>
    </>
  );
}
export default App;