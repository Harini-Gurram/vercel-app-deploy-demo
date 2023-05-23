import axios from 'axios';
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
        formdata.append("client_id",1379077412944454);
        formdata.append("client_secret",d0e3c7c69865b68644e4ec626048db03);
        formdata.append("redirect_uri",'https://insta-basic.vercel.app/');
        const requestOptions={
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        }
        axios.post('https//api.instagram.com/oauth/access_token', formdata, requestOptions)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
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
