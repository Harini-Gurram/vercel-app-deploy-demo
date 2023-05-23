import './App.css';
import { useLocation, useNavigate} from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate=useNavigate();
  const handleRedirect=()=>{
    if(window.confirm("You will be redirected to external link"))
    {
      window.location.href="https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-access-tokens-and-permissions"
    }
  }
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
      <div className="container">
        <div className='header'>
        <p>Follow the below steps to fetch feed from the instagram</p>
        <div className='show'>
            <p className='heady'>Step 1: Get Authorization</p>
            <p className='para'>The Authorization Window allows app users to grant your app permissions and short-lived Instagram User Access Tokens. After a user logs in and chooses which data to allow your app to access, we will redirect the user to your app and include an Authorization Code, which you can then exchange for a short-lived access token.</p>
            <div className='buttons-container'>
            <button className='button' onClick={handleClick}>Get code</button>
            <button className='button' onClick={handleRedirect}>More info</button>
            </div>
        </div>
        </div>
        </div>
        
      </div>
  );
}

export default App;
