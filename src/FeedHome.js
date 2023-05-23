import { useLocation } from "react-router-dom";
import axios from 'axios';
import {React} from 'react'
const FeedHome=()=>{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id="9716595748354275";
    const access_tok = searchParams.get('access_token');
    const handleClick = async () => {
        try {
          const {data}= axios
          .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=12&access_token=${access_tok}`)
         if(data)
         {
            console.log(data.id)
         } 
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