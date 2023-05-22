import './App.css';
import { useLocation, useNavigate} from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate=useNavigate();
  const handleClick=() => {
    const searchParams = new URLSearchParams(location.search);
    const codeParam = searchParams.get('code');
    if(codeParam)
    {
      window.alert("Fetched code successfully");
      navigate(`/token?code=${codeParam}`);
    }
    else{
      window.alert("Unable to fetch the code\n Check your User ID and redirect URL once")
    }
  };
  
  

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
