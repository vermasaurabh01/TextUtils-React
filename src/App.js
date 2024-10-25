import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
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
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes> 
            <Route path="/about" element={<About  mode={mode}/>} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, 
            Remove extra spaces" mode={mode} />} />
          </Routes>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
