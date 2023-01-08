import './ArtBox.css';

import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

import React, { useState } from 'react';

const ArtBox = ({ imageSrc, text, type, title, windowMode }) => {
    if(windowMode === 2){
        mtVar = 5
        mbVar = 5
    }

    if(type === "top"){
        mtVar = 60
    }
    if(type === "bot"){
        mbVar = 60
    }

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
                    <img src = {imageSrc[current]} alt = "pic" className = "art_img_zoom" id = "art_img_zoom"
                        style={windowMode !== 0 ? { overflow: "hidden", maxHeight : 525 } : { overflow: "hidden", maxHeight : 600 }} 
                    />

                    <Stack direction = {windowMode !== 0 ? "row": "column"} justifyContent="space-between">
                        <div>
                            <h2 className = "artTitle" 
                                style = {windowMode === 2 ? {fontSize: "1.4rem", padding: 16}: {fontSize: "2rem", padding: 24}}>
                                {title}
                            </h2>
                            <p className = "artText" style = {windowMode !== 0 ? { display: "none"} : { display: "block"}}>{text}</p>
                        </div>
                        
                        <Stack direction = "row" 
                            sx = {windowMode === 2 ? {margin: 2}:{margin: 3}}
                            alignItems="center"
                            justifyContent="center"
                            className = "arrows"
                        >
                            <ArrowCircleLeftRoundedIcon 
                                className = "arrowLeft" 
                                onClick = {leftArrow}
                                sx={windowMode === 2 ?
                                    { fontSize: "30px",
                                    "& :hover": { color: "#90caf9" },
                                    mr : 10 / 8}
                                    :
                                    { fontSize: "40px",
                                    "& :hover": { color: "#90caf9" },
                                    mr : 20 / 8}
                                }
                                style = {imageSrc.length === 1 ? { display: "none"} : { display: "block"}}
                                
                            />
                            <ArrowCircleRightRoundedIcon 
                                className = "arrowRight" 
                                onClick = {rightArrow}
                                sx={windowMode === 2 ?
                                    { fontSize: "30px",
                                    "& :hover": { color: "#90caf9" },
                                    ml : 10 / 8}
                                    :
                                    { fontSize: "40px",
                                    "& :hover": { color: "#90caf9" },
                                    ml: 20 / 8}
                                } 
                                style = {imageSrc.length === 1 ? { display: "none"} : { display: "block"}}
                            />
                        </Stack>
                    </Stack>
                    
                </Stack>
                
                
            </Dialog>
            
        </div>
    )
}
export default ArtBox;
