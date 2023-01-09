import './ArtBox.css';

import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import React, { useState } from 'react';

const ArtBox = ({ imageSrc, text, title, windowMode }) => {
    const [current, setCurrent] = useState(0)
    const length = imageSrc.length;

    const [open, setOpen] = React.useState(false);
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

    const loadFn = () =>{
        console.log("chads here")
    }
    
    let maxH;

    if(windowMode === 0){
        maxH = 600;
    } else {
        maxH = 525;
    }

    return (
        <div className = "artBox">
            <img src = {imageSrc[0]} alt = "pic" className = "art_img" onClick={handleToggle}
                style = {windowMode === 2 ? { margin: "5px" } : { margin: "15px"}}
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

                    <Stack direction = {windowMode !== 0 ? "row": "column"} justifyContent="space-between">
                        <div>
                            <h2 className = "artTitle" 
                                style = {windowMode === 2 ? {fontSize: "1.4rem", padding: 16}: {fontSize: "2rem", padding: 24, paddingBottom: 12}}>
                                {title}
                            </h2>
                            <p className = "artText" style = {windowMode !== 0 ? { display: "none"} : { display: "block"}}>{text}</p>
                        </div>
                        
                        <Stack direction = "row" 
                            sx = {windowMode === 2 ? {margin: 2}:{margin: 3}}
                            alignItems="center"
                            justifyContent="space-between"
                            className = "arrows"
                        >
                            <IconButton 
                                color="white" 
                                onClick = {leftArrow}
                                style = {imageSrc.length === 1 ? { display: "none"} : {}}
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
                                style = {imageSrc.length === 1 ? { display: "none"} : {}}
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
