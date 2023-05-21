import {React} from 'react'
import axios from 'axios'
{/*import axios from "axios";
import { useLocation } from "react-router-dom"
import oauth from "./oauth";
//import oauth from 'axios-oauth-client';

const Token=()=>{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const handleClick = async () => {
        try {
          // Make a POST request to the Instagram API to exchange the authorization code for an access token
          const response =await  oauth(axios)({
            url:'https://api.instagram.com/oauth/access_token',
            client_id:'1379077412944454',
            client_secret:'d0e3c7c69865b68644e4ec626048db03',
            grant_type:'authorization_code',
            redirect_uri:'https://insta-basic.vercel.app/',
            code:code,
        });
        console.log(response.access_token);
          // Extract the access token from the response
        }
        catch(error)
        {

        }
    }
    return(
        <div>
            <button onClick={handleClick}>
                Get access token
            </button>
        </div>
    )
}

export default Token
*/}




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
