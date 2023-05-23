import {React} from 'react'
import { useLocation } from 'react-router-dom';
const Token = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const codepara = searchParams.get('code');
    console.log("before click");
    console.log(codepara)
    const handleClick = async () => {
    try {
        const formdata=new FormData();
        formdata.append("code",codepara);
        const clientID = '1379077412944454';
        const clientSecret = 'd0e3c7c69865b68644e4ec626048db03';
        const redirectURI = 'https://insta-basic.vercel.app/';

        const requestOptions={
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        }
        const response = await fetch(`https://api.instagram.com/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=authorization_code&redirect_uri=${redirectURI}&code=${codepara}`, requestOptions);
        const data = await response.json();
        console.log(data.access_token);
        console.log(codepara + " after click");
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
