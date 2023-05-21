
import { useEffect, useState } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';

function App() {
  const [code,setCode]=useState('');
  console.log(window.href)
  const handleClick=(event)=>{
    console.log(window.href)
    const searchParams = new URLSearchParams(window.href.search);
    const code = searchParams.get('code');
    console.log(code)
    
  }
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
