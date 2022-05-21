import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React, { useState } from 'react';
import Footer from './components/Footer';

function App() {
  
  const [mode, setmode] = useState(true);

  const toggleDarkMode = () => {
    if (mode) {
      setmode(false)
      document.documentElement.style.setProperty("--bg_light", "#1B2631")
      document.documentElement.style.setProperty("--bg_coral", "black")
      document.documentElement.style.setProperty("--text_dark", "#eeeeee")
    }
    else {
      setmode(true)
      document.documentElement.style.setProperty("--bg_light", "#eeeeee")
      document.documentElement.style.setProperty("--bg_coral", "")
      document.documentElement.style.setProperty("--text_dark", "#1B2631")
    }
  }

  return (
    <>
      <Navbar webName="TextTools" about="About" contact="Contact Us" privacy="Privaciy" mode={mode} toggleDarkMode={toggleDarkMode}></Navbar>
      <TextBox heading="Make Valid Paragraphs" mode={mode}></TextBox>
      <Footer></Footer>
    </>
  );
}

export default App;
