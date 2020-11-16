import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'axios';
import {API_URL} from './config/API_URL';
const App = ():any =>{

    const [test, setTest ] = useState('a');

    useEffect(()=>{
        fetch(API_URL).then((r)=>{
            setTest(r.data);
        })
    },[])


  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              {test}
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}



export default App;
