import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('success', 'Dark mode has been enabled')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('success', 'Light mode has been enabled')
    }
  }

  const showAlert = (type, message) => {
    setAlert({ type: type, msg: message })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path="/" element={ <TextForm heading='Try TextUtils - Word Counter, Character Counter, Remove Extra Space & many more...' mode={mode} /> } />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
