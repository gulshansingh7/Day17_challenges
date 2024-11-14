import React, { useState } from 'react';
import './App.css';
import GoogleLogo from './assets/google.webp'; // You can replace with your own logo image
import { getRoles } from '@testing-library/react';

function App() {
  let [count, setCount]=useState(2);
  return (
    <div className="app">
      
      <h2>The goal is to turn data <span className='state'>{count}</span> into information <span className='info'>${count}</span>, and information into insight.</h2>
      <div className="app__logo">
        <img src={GoogleLogo} alt="Google Logo" />
      </div>

     
      <div className="app__search">
        <input
          type="text"
          placeholder="Search Google or type a URL"
          className="app__searchInput"
        />
      </div>

      
      <div className="app__buttons">
        <button className="app__button" onClick={()=>setCount(count+Math.random()*3)}>Google Search</button>
        <button className="app__button" onClick={()=>setCount(count+5)}>I'm Feeling Lucky</button>
      </div>
    </div>
  );
}

export default App;
