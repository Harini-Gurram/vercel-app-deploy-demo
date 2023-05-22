import {React} from 'react'
import axios from 'axios'
//import qs from 'qs';
import { useLocation } from 'react-router-dom';
const Token = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const codepara = searchParams.get('code');
    console.log(codepara)
    const handleClick = async () => {
    try {
        console.log(codepara)
        const response = await axios({
            method: 'post',
            url: 'https://api.instagram.com/oauth/access_token', 
            params: { 
              client_id: '1379077412944454',
              client_secret: 'd0e3c7c69865b68644e4ec626048db03',
              grant_type: 'authorization_code',
              redirect_uri: 'https://insta-basic.vercel.app/',
              code: codepara,
            },
          
      })
      console.log(codepara)
      console.log(response.data.access_token);
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
