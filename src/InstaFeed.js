//import { useLocation } from "react-router-dom";
//import Feed from "./Feed"
//import './FeedHome.css'
import Sidenav from './Navigate';
import FeedCenter from './components/FeedCenter';
import { Divider, Stack } from '@mui/material';
const InstaFeed=()=>{
    //const location = useLocation();
    //const searchParams = new URLSearchParams(location.search);
    //const feeds = searchParams.get('feeds');
    
    return(
        <Stack direction='row' spacing={10} divider={<Divider orientation='vertical' flexItem/>}>
            <Sidenav position='fixed' top={1}/>
            <FeedCenter/>
        </Stack>    
    )
}
export default InstaFeed;