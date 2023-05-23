import { useLocation } from "react-router-dom";
import Axios from 'axios';
import {React} from 'react'
const instaBaseURL = Axios.create({
    baseURL:'https://graph.instagram.com'
  });
const FeedHome=()=>{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const access_tok = searchParams.get('access_token');
    const handleClick = async () => {
        try {
          const {data} = await instaBaseURL.post('com/me/media', {
            fields:'id,media_type,media_url,username,timestamp',
            access_token:access_tok,
          }, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
          
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      };
        
    return(
        <div>
          <button onClick={handleClick}>Get feed</button>
        </div>
    )
};
export default FeedHome