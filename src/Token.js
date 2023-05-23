import Axios from 'axios';
import {React} from 'react'
import { useLocation } from 'react-router-dom';
const instaBaseURL = Axios.create({
  baseURL:'https//api.instagram.com/'
});

const Token = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const codepara = searchParams.get('code');
    console.log("before click");
    console.log(codepara)
    const handleClick = async () => {
    try {
      const {data} = await instaBaseURL.post('/oauth/access_token', {
        client_id:1379077412944454,
        client_secret:'d0e3c7c69865b68644e4ec626048db03',
        grant_type:"authorization_code",
        redirect_uri:'https://insta-basic.vercel.app',
        code:codepara
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    console.log(data)
        
       
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Get access token</button>
    </div>
  );
};

export default Token;
