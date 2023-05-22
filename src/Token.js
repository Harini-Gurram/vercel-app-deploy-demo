import {React} from 'react'
import axios from 'axios'
import qs from 'qs';
import { useLocation } from 'react-router-dom';
const Token = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const codepara = searchParams.get('code');
    console.log(codepara)
    const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:8000/exchange-token', 
      qs.stringify({code: codepara}),
      {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
      });
      console.log(codepara)
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
