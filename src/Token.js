import Axios from 'axios';
import {React} from 'react'
import './App.css'
import { useLocation, useNavigate } from 'react-router-dom';
const instaBaseURL = Axios.create({
  baseURL:'https://api.instagram.com'
});

const Token = () => {
    const location = useLocation();
    const navigate=useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const codepara = searchParams.get('code');
    console.log("before click");
    console.log(codepara)
    const handleRedirect=()=>{
      if(window.confirm("You will be redirected to external link"))
      {
        window.location.href="https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-access-tokens-and-permissions"
      }
    }
    const handleClick = async () => {
    try {
      const {data} = await instaBaseURL.post('/oauth/access_token', {
        client_id:1379077412944454,
        client_secret:'d0e3c7c69865b68644e4ec626048db03',
        grant_type:"authorization_code",
        redirect_uri:'https://insta-basic.vercel.app/',
        code:codepara
      }, {
        headers: {
          "Access-Control-Request-Method":'POST',
          "Access-Control-Allow-Origin":"https://insta-basic.vercel.app/"
          
        },
        
        
      }  
    )
    console.log(data.access_token)
    if(data)
    {
      
      navigate(`/feed?access_token=${data.access_token}`)
    }
      
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className='header'>
        <p>Instagram basic display API</p>
        <div className='show'>
            <p className='heady'>Step 2:Exchange the code for a token</p>
            <p className='para'>Once you receive a code, exchange it for a short-lived access token by sending a POST request to the API endpoint</p>
            <div className='buttons-container'>
            <button className='button' onClick={handleClick}>Get access token</button>
            <button className='button' onClick={handleRedirect}>More info</button>
            </div>
          </div>
        </div>
        </div>
        </div>
      
  );
};

export default Token;
