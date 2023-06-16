import { Comment, ExpandMoreSharp, Favorite, GridOn} from '@mui/icons-material'
import { Button, Stack, Typography, buttonClasses, styled,Link,Divider, ImageList, ImageListItem, IconButton} from '@mui/material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
const StyledButton=styled(Button)(({theme,isclicked})=>({
    [`&.${buttonClasses.root}`]:{
        variant:'text',
        borderRadius:0,
        fontSize:'11px',
        disableElevation:'none',
        disableRippleFocus:'none',
        backgroundColor:'transparent',
        color:isclicked?'black':'gray',
        borderTop:isclicked?'1px solid black':'none'
    }
}))
const Circle = styled('div')({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #000',
  });
const bottoms=['Meta','About','Blog','Jobs','Help','API','Privacy','Terms','Top Accounts','Locations','Instagram Lite','Contact Uploading & Non-Users','Meta Verified']
function Posts() {
    const [isButtonClicked, setButtonClicked] = useState({0:true,1:false,2:false});
    const handleButtonClick = (buttonNumber) => {
        setButtonClicked((prevState) => {
          const updatedState = {};
          Object.keys(prevState).forEach((key) => {
            updatedState[key] = (key === buttonNumber.toString());
          });
    
          return updatedState;
        });
      };
  return (
    <Stack direction='column' >
    <Divider sx={{width:'135vh'}} />
    <Stack direction='row' alignItems='center' justifyContent='center' spacing={8}>
        {Object.keys(isButtonClicked).map((buttonNumber)=>(
            <StyledButton
            key={buttonNumber}
            startIcon={buttonNumber==="0"?<GridOn/>:buttonNumber==="1"?<BookmarkBorderOutlinedIcon/>:<AssignmentIndOutlinedIcon/>}
            onClick={()=>handleButtonClick(buttonNumber)}
            isclicked={isButtonClicked[buttonNumber]}
            >
                {buttonNumber==="0"?"posts":buttonNumber==="1"?"saved":"tagged"}
            </StyledButton>
        ))}

    </Stack>
    <Stack>
        {Object.keys(isButtonClicked).map((buttonNumber)=>(
            <div key={buttonNumber}>
            {isButtonClicked[buttonNumber] && <Display buttonNumber={buttonNumber}/>}
            </div>
        ))}
    </Stack>
    <Stack direction='column' spacing={1}>
    <Stack marginTop='6rem' direction='row' columnGap='16px'>
        {bottoms.map((bottom,index)=>(
            <Link underline='hover' color='grey' fontSize='12px' key={index} sx={{'&: hover':{cursor:'pointer'}}}>{bottom}</Link>
        ))}
    </Stack>   
    <Stack direction='row' columnGap='16px' alignItems='center' justifyContent='center'>
        <Link fontSize='12px' underline="none" color='grey' endIcon={<ExpandMoreSharp/>}>English</Link>
        <Link fontSize='12px' underline="none" color='grey'>2023 Instagram from Meta</Link>
    </Stack> 
     <div style={{marginBottom:'10rem'}}/>
    </Stack>
    </Stack>
  )
}
const StyledImageList = styled(ImageList)`
  .MuiImageListItem-root {
    position: relative;
    overflow: hidden;
  }

  .image {
    transition: filter 0.3s ease;
  }

  .image:hover {
    filter: blur(2px);
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .MuiImageListItem-root:hover .overlay {
    opacity: 1;
  }

  .icon {
    color: white;
    font-size: 48px;
  }
`;
function Display(props){
    const feeds=useSelector((state)=>state.feedData.feedData);
    const [hovered, setHovered] = useState(null);

    const handleMouseEnter = (index) => {
      setHovered(index);
    };
    
      const IconContainer = styled('div')({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      });
    return (
        <div>
            
             {props.buttonNumber==="1" && (
                    <Stack direction='column' spacing={4}>
                        <div style={{marginTop:'1rem'}}/>  
                        <Stack direction='row' spacing={70}>
                            <Typography variant='body2' fontSize='11px' marginTop={1.8} color='gray'>Only you can see what you've saved</Typography>
                            <Link underline="none" varinat='text' fontSize='14px' sx={{'&: hover':{color:'gray',cursor:'pointer'}}}><b>+New Collection</b></Link>
                        </Stack>
                        <Stack direction='column' spacing={2} alignItems='center' justifyContent='center'>
                        <Circle>
                        <BookmarkBorderOutlinedIcon/>
                    </Circle>
                            <Typography variant='h5' fontWeight='10px'><b fontWeight='20px'>Save</b></Typography>
                            <Typography variant='body2' fontSize='12px'>Save photos and videos that you want to see again.No <br/>one is notified, and only you can see what you've saved.</Typography>
                        </Stack>
                        </Stack>
                    )} 
            {props.buttonNumber==="2" && (
                <Stack direction='column' spacing={3} alignItems='center' justifyContent='center' marginTop='5vh'>
                    <div style={{marginTop:'1rem'}}/> 
                    <Circle>
                        <AssignmentIndOutlinedIcon/>
                    </Circle>
                   
                    <Typography variant='h5' fontWeight='10px'><b fontWeight='20px'>Photos of you</b></Typography>  
                    <Typography variant='body2' fontSize='12px'>When people tag you in photos, they'll appear here.</Typography>  
                </Stack>
            )}
            {props.buttonNumber==="0" && (
                <div>
                    <div style={{marginTop:'1.5rem'}}/> 
                <StyledImageList sx={{ width:'100%',height:'100%'}} cols={3}>
                {feeds.map((item,index) => (
                  <ImageListItem key={index} onMouseEnter={()=>handleMouseEnter(index)}
                  onMouseLeave={()=>handleMouseEnter(null)}>
                   
                    <img
                      className="image"
                      src={item.media_url}
                      srcSet={`${item.media_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.caption}
                      loading="lazy"
                      styles={{'&:hover':{opacity:'0.3'}}}
                    />
                     {index===hovered &&  (
                        <IconContainer >
                           <IconButton className="overlay" sx={{color:'white'}} backgroundColor='transparent'>
                            <Stack direction="row" spacing={5} backgroundColor='transparent'>
                                <Favorite/> 0
                                <Comment/>1
                            </Stack>
                            </IconButton>
                        </IconContainer> 
                       
                        
          )}
                  </ImageListItem>
                ))}
              </StyledImageList>
              </div>
            )}
            
        </div>
           
             

    )
    
}
export default Posts;