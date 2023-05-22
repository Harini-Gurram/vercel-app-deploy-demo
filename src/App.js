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
        <h1>Follow the below steps to fetch feed from the instagram</h1>
        <div className='buttons'>
          <h3>1. Clicke here to get the code from API</h3>
        <button class='button' onClick={handleClick}>Get code</button>
        <br/>
        <h3>2. Clicke here to get the token from API</h3>
        <button class='button'>Get Token</button>
        <br/>
        <h3>3. Clicke here to get feed</h3>
        <button class='button'>Get Feed</button>
        </div>
      </div>
    </div>
  );
}

export default App;
