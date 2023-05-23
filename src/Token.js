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
        var requestOptions={
           method: 'POST',
          body: formdata,
          redirect: 'follow'
        }
        fetch(`https://api.instagram.com/oauth/access_token&client_id=1379077412944454&client_secret=d0e3c7c69865b68644e4ec626048db03&grant_type=authorization_code&redirect_uri=https://insta-basic.vercel.app/&code=${codepara}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
          
      
      console.log(codepara+"after click")
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
