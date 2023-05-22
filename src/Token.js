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
      const response=await axios.post('https://api.instagram.com/oauth/access_token&client_id=1379077412944454&client_secret=d0e3c7c69865b68644e4ec626048db03&grant_type=authorization_code&redirect_uri=insta-basic.vercel.app&code=AQAFKy3dwqQXMfDAZRxhMlC77P-JdQC22_rs0QmndNt0F1R1xPKg3Goi44V5uGR6F7pDmCsOxchsF6RFOkxZi75aSv8HqjkQUFJgdFGJOsn61raStW8yKuHN0JUvtRD-9wuIA1bVDNVQA4OmaI9zyAmLW8zlU_xCOWgDaoKsrBe0jbtlp-es_qQVjyfZzQR_EBtmNIiXjmS_p3uQMeWPvsudYx3jEASvvmhrW-u66GFzmQ')
      .then((res)=>{
        console.log(res.data)
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
