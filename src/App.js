
import { useEffect } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';

function App() {
  {/*const location=useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    if(code)
    {
      console.log(code);
    }else
    {
      console.log("No code found")
    }
  }, [location]);*/}
  const handleClick=(event)=>{
    event.preventDefault();
    window.location.href='https://api.instagram.com/oauth/authorize?client_id=1379077412944454&redirect_uri=https://insta-basic.vercel.app/&scope=user_profile,user_media&response_type=code'
    const searchParams = new URLSearchParams(window.href.search);
    const code = searchParams.get('code');
    fetch('https://api.instagram.com/oauth/authorize?client_id=1379077412944454&redirect_uri=https://insta-basic.vercel.app/&scope=user_profile,user_media&response_type=code')
    .then((res)=>{
      console.log(res)
    })
    if(code)
    {
      console.log(code);
    }else
    {
      console.log("No code found")
    }
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
