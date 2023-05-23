import { useLocation } from "react-router-dom";
import axios from 'axios';
import {React, useState} from 'react'
import Feed from "./Feed";
import './FeedHome.css'
const FeedHome=()=>{
    const [feeds,setFeedsData]=useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const access_tok = searchParams.get('access_token');
    const handleClick = async () => {
        try {
          axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=12&access_token=${access_tok}`)
          .then((resp) => {
            setFeedsData(resp.data.data)
        })
        
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      };
        
    return(
        <div>
          <button onClick={handleClick}>Get feed</button>
          <div>
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
          </div>
        </div>
    )
};
export default FeedHome