//import { useLocation } from "react-router-dom";
import Feed from "./Feed"
import './FeedHome.css'
import { useSelector } from "react-redux";
const InstaFeed=()=>{
    //const location = useLocation();
    //const searchParams = new URLSearchParams(location.search);
    //const feeds = searchParams.get('feeds');
    const feeds=useSelector((state)=>state.feedData.feedData);
    console.log(feeds.id+"  ")
    return(
        <div className="App">
            <div className="homepage">
                <div className="homepage__navWraper">
                    <Sidenav/>
                </div>
                <div className="homepage__timeline">
                    Feed
                </div>
            </div>
            {/*<div className="fcontainer">
                        {feeds && feeds.map((feed) => (
                                <Feed key={feed.id} feed={feed} />
                                 ))}
                        </div>*/}
        </div>
        
    )
}
export default InstaFeed;