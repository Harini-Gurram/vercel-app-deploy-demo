import { useLocation, useNavigate} from "react-router-dom";
import axios from 'axios';
import {React, useState} from 'react'
import './App.css'
import './FeedHome.css'
import { useDispatch, useSelector } from "react-redux";
import { getFields } from "./feedSlice";
const FeedHome=()=>{
    const [feeds,setFeedsData]=useState([]);
    const location = useLocation();
    const nav=useNavigate();
    const dispatch=useDispatch();
    const feedData=useSelector((state)=>state.feedData);
    console.log(feedData.data.id)
    const searchParams = new URLSearchParams(location.search);
    const access_tok = searchParams.get('access_token');
    const handleRedirect=()=>{
        if(window.confirm("You will be redirected to external link"))
        {
          window.location.href="https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-access-tokens-and-permissions"
        }
      }
    const handleClick = async () => {
        try {
          axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=12&access_token=${access_tok}`)
          .then((resp) => {
            setFeedsData(resp.data.data)
            dispatch(getFields(feeds))
            nav(`/instaFeed`);
            console.log(feeds.id)
        })
        
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      };
        
    return(
        <div className="feedApp">
             <div className="feedcontainer">
                <div className='header'>
                <p>Instagram basic display API</p>
                    <div className='show'>
                        <p className='heady'>Step 3:Get User's profile and user media</p>
                        <p className='para'>Once you receive a code, exchange it for a short-lived access token by sending a POST request to the API endpoint</p>
                        <div className='buttons-container'>
                        <button className='button' onClick={handleClick}>Get Feed</button>
                        <button className='button' onClick={handleRedirect}>More info</button>
                        </div>
                        {/*<div className="feed">
                        <div className="fcontainer">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
            </div>*/}
                    </div>
                </div>
            </div>
        </div>

        
    )
};
export default FeedHome