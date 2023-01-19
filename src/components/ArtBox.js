import './ArtBox.css';

import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import React, { useState } from 'react';

var numLoaded = 0;

const ArtBox = ({ imageSrc, text, title, windowMode, setNumLoaded, getNumLoaded }) => {
    const [current, setCurrent] = useState(0)
    const length = imageSrc.length;

    const [open, setOpen] = React.useState(false);

    const [imagesLoaded, setImagesLoaded] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
        setCurrent(0)
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const leftArrow = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const rightArrow = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const loadFn = () => {
        numLoaded += 1
        
        if(numLoaded >= imageSrc.length){
            setImagesLoaded(true)
        }
    }

    let maxH;
    let skMb;
    let artTitleStyle;

    if(windowMode === 0){
        maxH = 600;
        skMb = 0;
        artTitleStyle = {
            fontSize: "2rem",
            padding: 24,
            paddingBottom: 12
        }
    } else if(windowMode === 1){
        maxH = 525;
        skMb = 24;
        artTitleStyle = {
            fontSize: "2rem",
            padding: 24,
        }
    } else if(windowMode === 2){
        maxH = 525;
        skMb = 24;
        artTitleStyle = {
            fontSize: "1.2rem", 
            padding: 16
        }
    }

    return (
        <div className = "artBox">
            <img src = {imageSrc[0]} alt = "pic" className = "art_img" onClick={handleToggle}
                style = {windowMode === 2 ? { margin: "5px" } : { margin: "15px"}}
                onLoad = {()=> {setNumLoaded(true)} }
            />

            <Dialog onClose={handleClose} 
                open={open} 
                className = "dialog"
                maxWidth = 'xl'
            >
                
                <Stack direction = {windowMode !== 0 ? "column" : "row"}>
                    {imageSrc.map((imgItem,index)=>{
                        return(
                            <img src = {imgItem} key = {index} alt = "pic" className = "art_img_zoom" id = "art_img_zoom"
                            style={current === index ? {maxHeight: maxH}:{display: "none", maxHeight: maxH}} 
                            onLoad = {loadFn}
                            />
                            
                        )
                    })}

                    <Stack 
                        className = "loadingDesc"
                        direction = {windowMode !== 0 ? "row": "column"} 
                        justifyContent="space-between"
                        style = {imagesLoaded ? {display: "none"}:{}}
                    >
                        <div>
                            <Skeleton variant="text"
                                style = {windowMode === 2 ? {fontSize: "1.4rem", margin: 16, width: 80}
                                                                :
                                                            {fontSize: "2rem", margin: 24, marginBottom: skMb, width: 120}}
                            />

                            <div style = {windowMode !== 0 ? { display: "none"} : {width: 300}} >
                                <Skeleton variant="text" sx={{ fontSize: '1.2rem',width:252, margin: 3, mb: 0, mt: 1.5 }} />
                                <Skeleton variant="text" sx={{ fontSize: '1.2rem',width:252, margin: 3, mb: 0, mt: 0 }} />
                                <Skeleton variant="text" sx={{ fontSize: '1.2rem',width:252, margin: 3, mb: 0, mt: 0 }} />
                                <Skeleton variant="text" sx={{ fontSize: '1.2rem',width:252, margin: 3, mb: 0, mt: 0 }} />
                                <Skeleton variant="text" sx={{ fontSize: '1.2rem',width:252, margin: 3, mb: 0, mt: 0 }} />
                                <Skeleton variant="text" sx={{ fontSize: '1.2rem',width:175, margin: 3, mt: 0 }} />
                            </div>
                        </div>

                    </Stack>

                    <Stack 
                        className = "loadedDesc"
                        direction = {windowMode !== 0 ? "row": "column"}
                        justifyContent="space-between"
                        style = {imagesLoaded ? {}:{display: "none"}}
                    >
                        <div>
                            <h2 className = "artTitle" 
                                style = {artTitleStyle}>
                                {title}
                            </h2>
                            <p className = "artText" style = {windowMode !== 0 ? { display: "none"} : { display: "block"}}>{text}</p>
                        </div>
                        
                        <Stack direction = "row" 
                            sx = {windowMode === 2 ? {margin: 2}:{margin: 3}}
                            alignItems="center"
                            justifyContent="space-between"
                            className = "arrows"
                            style = {imageSrc.length === 1 ? { display: "none"} : {}}
                        >
                            <IconButton 
                                color="white" 
                                onClick = {leftArrow}
                                style = {windowMode === 0 ? {}:{paddingTop: 0, paddingBottom: 0}}
                            >
                                <ArrowLeftIcon 
                                     sx={windowMode === 2 ?
                                        { fontSize: "30px"}
                                        :
                                        { fontSize: "40px"}
                                    }
                                />
                            </IconButton>

                            <IconButton 
                                color="white" 
                                onClick = {rightArrow}
                                style = {windowMode === 0 ? {}:{paddingTop: 0, paddingBottom: 0}}
                            >
                                <ArrowRightIcon 
                                     sx={windowMode === 2 ?
                                        { fontSize: "30px"}
                                        :
                                        { fontSize: "40px"}
                                    }
                                />
                            </IconButton>

                        </Stack>
                    </Stack>
                    
                </Stack>
                
                
            </Dialog>
            
        </div>
    )
}
export default ArtBox;
