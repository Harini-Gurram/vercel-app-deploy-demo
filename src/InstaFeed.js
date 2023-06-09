//import { useLocation } from "react-router-dom";
import Feed from "./Feed"
import './FeedHome.css'
import { useSelector } from "react-redux";
const InstaFeed=()=>{
    //const location = useLocation();
    //const searchParams = new URLSearchParams(location.search);
    //const feeds = searchParams.get('feeds');
    const feeds=useSelector((state)=>state.feedData);
    console.log(feeds.id+"  ")
    return(
        <div className="fcontainer">
                        {feeds && feeds.map((feed) => (
                                <Feed key={feed.id} feed={feed} />
                                 ))}
        </div>
    )
}
export default InstaFeed;