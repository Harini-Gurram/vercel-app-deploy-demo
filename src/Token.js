import {React} from 'react'
import axios from 'axios'
import qs from 'qs';
import { useLocation } from 'react-router-dom';
const Token = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:3003/exchange-token', 
      qs.stringify({
        client_id: "1379077412944454",
          client_secret: "d0e3c7c69865b68644e4ec626048db03",
          grant_type: "authorization_code",
          redirect_uri: "https://insta-basic.vercel.app/",
          code: code
      }),
      {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
      });

      console.log(response.data.access_token);
      // You can store the access_token in state or perform any other required action with it
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
