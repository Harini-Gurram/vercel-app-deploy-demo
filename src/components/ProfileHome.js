import { Avatar, Button, Grid, Stack, Typography, buttonClasses, styled} from '@mui/material'
import React from 'react'
import { Settings } from '@mui/icons-material'
const StyledButton=styled(Button)({
    [`&.${buttonClasses.root}`]:{
        variant:'contained',
        size:'small',
        backgroundColor:'#F1EDF2',
        color:'black',
        textTransform:'none',
        borderRadius:'6px',
        height:'5vh',
        width:'20vh',
        '&:hover':{
            backgroundColor:'lightgray'
        }

    }
})
function ProfileHome() {
  return (
    <Stack direction='row' spacing={3}>
        <Grid container >
            <Grid item xs={6} sm={5}>
                <Grid
                    container
                    style={{ height: '50%' ,marginTop:'4vh',marginLeft:'14vh'}}
                >
                    <Avatar className="AvatarStyle" sx={{ width: 140, height: 140,'&:hover':{
                        cursor:'pointer'
                    }}}/>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Grid 
                    container
                    sx={{marginTop:'5vh',marginLeft:'0.1vh'}}
                    >
                        <Stack direction='column' spacing={2.3  }>
                            <Stack direction='row' spacing={3}>
                                <Typography variant='subtitle1' sx={{'&:hover':{cursor:'pointer'}}}>sbal_eulaV</Typography>
                                <StyledButton>
                                    <Typography variant='h6' fontSize={14} >Edit profile</Typography>
                                </StyledButton>
                                <Settings height='6vh' sx={{'&:hover':{cursor:'pointer'}}}/>
                            </Stack>
                            <Stack direction='row' spacing={4} >
                                <Typography variant='subtitle1'><b>6</b> posts</Typography>
                                <Typography variant='subtitle1' sx={{'&:hover':{cursor:'pointer'}}}><b>0</b> followers</Typography>
                                <Typography variant='subtitle1' sx={{'&:hover':{cursor:'pointer'}}}><b>0</b> following</Typography>
                            </Stack>
                            <Typography variant='h4' fontSize={14} fontWeight='bold'>Sbal_eulaV</Typography>
                        </Stack>
                   
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default ProfileHome