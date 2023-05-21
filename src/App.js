
import { useEffect, useState } from 'react';
import './App.css';
import { useLocation, useSearchParams } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [code, setCode] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const codeParam = searchParams.get('code');
    setCode(codeParam);
  }, [location.search]);
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
