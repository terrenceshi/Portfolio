import './ArtBox.css';

import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

import React, { useState } from 'react';

const ArtBox = ({ imageSrc, text, type, title, small }) => {
    var mtVar = 15
    var mbVar = 15

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
        //console.log(arrowLeftRef.current)
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
                style = {{ margin: "15px", marginTop: `${mtVar}px`, marginBottom: `${mbVar}px` }}/>

            <Dialog onClose={handleClose} 
                open={open} 
                className = "dialog"
                maxWidth = 'xl'
            >
                
                <Stack direction = {small ? "column" : "row"}>
                    <img src = {imageSrc[current]} alt = "pic" className = "art_img_zoom" id = "art_img_zoom"
                        style={small ? { overflow: "hidden", maxHeight : 525 } : { overflow: "hidden", maxHeight : 600 }} 
                    />

                    <Stack direction = {small ? "row": "column"} justifyContent="space-between">
                        <div>
                            <h2 className = "artTitle">{title}</h2>
                            <p className = "artText" style = {small ? { display: "none"} : { display: "block"}}>{text}</p>
                        </div>
                        
                        <Stack direction = "row" 
                            sx = {{margin: 3}}
                            alignItems="center"
                            justifyContent="center"
                            className = "arrows"
                        >
                            <ArrowCircleLeftRoundedIcon 
                                className = "arrowLeft" 
                                onClick = {leftArrow}
                                sx={{ fontSize: "50px",
                                    "& :hover": { color: "#90caf9" }
                                }}
                                style = {imageSrc.length === 1 ? { display: "none"} : { display: "block"}}
                                
                            />
                            <ArrowCircleRightRoundedIcon 
                                className = "arrowRight" 
                                onClick = {rightArrow}
                                sx={{ fontSize: "50px",
                                    "& :hover": { color: "#90caf9" } 
                                }} 
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
