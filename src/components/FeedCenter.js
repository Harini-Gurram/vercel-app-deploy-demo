import React from 'react'
import ProfileHome from './ProfileHome';
import {Stack } from '@mui/material';
import Posts from './Posts';

function FeedCenter() {
  return (
        
            <Stack direction="column" spacing={2} marginTop='1px' sx={{height:'100%'}}>
                    <ProfileHome/>
                    <br/>
                    <br/>
                    
                    <Posts/>

            </Stack>
  )
}

export default FeedCenter