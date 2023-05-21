
import { useEffect, useState } from 'react';
import './App.css';
import { useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  const [code, setCode] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const codeParam = searchParams.get('code');
    setCode(codeParam);
  }, [location.search]);
  if(code)
  {
    window.alert("Fetched code successfully");
  }
  else{
    window.alert("Unable to fetch the code\n Check your User ID and redirect URL once")
  }
  console.log(code)
  return (
    <div className="App">
      <div>
        <h1>Follow the below steps to fetch feed</h1>
        <button>Get code</button>
      </div>
    </div>
  );
}

export default App;
