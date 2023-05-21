import axios from "axios";
import { useLocation } from "react-router-dom"
import oauth from 'axios-oauth-client';

const Token=()=>{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const handleClick = async () => {
        try {
          // Make a POST request to the Instagram API to exchange the authorization code for an access token
          const response = oauth.authorizationCode(
            axios.create(),
            'https://api.instagram.com/oauth/access_token',
            '1379077412944454',
            'd0e3c7c69865b68644e4ec626048db03',
            'authorization_code',
            'https://insta-basic.vercel.app/',
             code
          );
          const authCode=await response('AUTHORIZATION CODE')
          console.log(authCode);
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
            {accessToken}
        </div>
    )
}

export default Token