import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [babyData, setBabyData] = useState([])
  
 useEffect(() => {
fetch('http://localhost:/3002/')
  .then(response=>response.json())
  .then(data => setBabyData(data))
},[babyData])



  return (
    <div className="App">
      <header className="App-header">
        <p>
          Top Baby Names for 2021 
        </p>
      </header>
      <div>
        <p>
        {babyData}
        </p>
      </div>
    </div>
  );
}

export default App;
