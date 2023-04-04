import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleform = (formName) =>{
    setCurrentForm (formName);
  }

  return (
    <div className="App">
      {
        currentForm  === 'login'? <Login onFormSwitch={toggleform}/> : <Register onFormSwitch={toggleform}/>
      }
      
    </div>
  );
}

export default App;
