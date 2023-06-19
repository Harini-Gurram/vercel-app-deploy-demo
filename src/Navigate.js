import React from "react";
import { Search,Explore,Slideshow,Chat,FavoriteBorder,AddCircleOutline,Menu, Home } from "@mui/icons-material";
import { Avatar,Button,Stack, Typography, buttonClasses, styled} from "@mui/material";

const ButtonStyled=styled(Button)(({theme})=>({
    [`&.${buttonClasses.root}`]:{
      borderRadius: '4px',
      color:'black',
      marginLeft:'12px',
      textTransform:'none',
      fontSize:'15px',
      alignItems:'left',
      justifyContent:'left',
      width:'100%',
      backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor:'lightgrey',
            '& .MuiButton-startIcon': {
              transform: 'scale(1.2)', 
              transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.short, 
              }),
            },
          },
    },
    '& .MuiButton-startIcon':{
      marginRight:theme.spacing(3),
      '& svg': {
        fontSize: '24px',
      },
    }
}))
function Sidenav() {
  return (
    <Stack direction='column' spacing={1} sx={{marginLeft:0.6}} textAlign="left" >
       <img
       style={{width:" 125px",
        margin:" 25px",
        border:' none'}}
        
        src="https://tse2.mm.bing.net/th/id/OIP.w7dyhWvuFT1Ly43XzKcehQHaFD?pid=ImgDet&rs=1"
        alt="Instagram Logo"
        width='125px'
        margin='25px'
        border='none'
      />
      
      <Stack direction='column' spacing={2} alignItems='flex-start'>
        <ButtonStyled startIcon={<Home/>}>Home</ButtonStyled>
        <ButtonStyled startIcon={<Search/>}>Search</ButtonStyled>
        <ButtonStyled startIcon={<Explore/>}>Explore</ButtonStyled>
        <ButtonStyled startIcon={<Slideshow/>}>Reels</ButtonStyled>
        <ButtonStyled startIcon={<Chat/>}>Messages</ButtonStyled>
        <ButtonStyled startIcon={<FavoriteBorder/>}>Notifications</ButtonStyled>
        <ButtonStyled startIcon={<AddCircleOutline/>}>Create</ButtonStyled>
        <ButtonStyled startIcon={<Avatar sx={{height:'30px',width:'30px'}}/>}>Profile</ButtonStyled>
        <Typography gutterBottom/>
        <br/>
        <ButtonStyled startIcon={<Menu/>}>More</ButtonStyled>
      </Stack>
    </Stack>
  );
}

export default Sidenav;