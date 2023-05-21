
import { useEffect, useState } from 'react';
import './App.css';
import { useLocation, useSearchParams } from 'react-router-dom';

function App() {
  let code = (new URLSearchParams(window.location.search)).get("code")
  console.log(code)
  return (
    <div className="App">
      <div>
        <h1>Follow the below steps to fetch feed</h1>
        <button onClick={handleClick}>Get code</button>
      </div>
    </div>
  );
}

export default App;
