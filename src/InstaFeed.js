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
        <Stack direction='row' spacing={42} >
      <Stack position="fixed" direction="row" spacing={8}><Sidenav/> 
      <Divider orientation='vertical'flexItem/>
      </Stack>
      
      <Stack marginLeft={0}><FeedHome /></Stack>
  </Stack> 
    )
}
export default InstaFeed;