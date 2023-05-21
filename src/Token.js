import {React} from 'react'
import axios from 'axios'
const Token = () => {
  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:3003/exchange-token', {
        code: 'YOUR_AUTHORIZATION_CODE',
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
