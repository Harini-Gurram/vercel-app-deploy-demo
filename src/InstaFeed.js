import { useLocation } from "react-router-dom";
import Feed from "./Feed"

const InstaFeed=()=>{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const feeds = searchParams.get('feeds');
    return(
        <div className="fcontainer">
        {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
                 ))}
</div>
    )
}
export default InstaFeed