import { useLocation } from "react-router-dom"

const Token=()=>{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const [accessToken,setAccessToken]=useState('');
    const handleClick = async () => {
        try {
          // Make a POST request to the Instagram API to exchange the authorization code for an access token
          const response = await axios.post('https://api.instagram.com/oauth/access_token', {
            client_id: '1379077412944454',
            client_secret: 'd0e3c7c69865b68644e4ec626048db03',
            grant_type: 'authorization_code',
            redirect_uri:'https://insta-basic.vercel.app/',
            code: code,
          });
    
          // Extract the access token from the response
          const { access_token } = response.data;
          setAccessToken(access_token);
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      };
    
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