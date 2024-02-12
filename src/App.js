// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';

function App() {
  const [defaultMode, setMode] = useState("light"); //state variable which shows whether dark mode is enabled or not.

  const darkMode = () =>{
    if (defaultMode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(32 34 44)';
      document.body.style.color = 'white';
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  } 
  return (
    <>
      <Navbar title="Textutils" about="About Textutils" mode={defaultMode} toggleMode={darkMode} />
      <div className="container py-4 my-10">
      <TextForm heading="Enter Your Text Here" />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
