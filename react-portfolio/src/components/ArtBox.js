import './ArtBox.css';

import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const ArtBox = ({ imageSrc, text, type }) => {
    var mtVar = 15
    var mbVar = 15

    if(type == "top"){
        mtVar = 60
    }
    if(type == "bot"){
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
                style = {{ margin: "15px", marginTop: `${mtVar}px`, marginBottom: `${mbVar}px` }}/>

            <Dialog onClose={handleClose} 
                open={open} 
                className = "dialog"
                maxWidth = 'xl'
            >
                
                <Stack direction="row">
                    <img src = {imageSrc[current]} alt = "pic" className = "art_img_zoom" style={{ overflow: "hidden" }} />

                    <Stack direction = "column">
                        <p className = "artText">{text}</p>
                        <Stack direction = "row" 
                            sx = {{margin: 2}}
                            alignItems="center"
                            justifyContent="center"
                            className = "arrows"
                        >
                            <ArrowCircleLeftRoundedIcon 
                                className = "arrowLeft" 
                                onClick = {leftArrow}
                                sx={{ fontSize: "50px",
                                "& :hover": { color: "#526fce" } }} 
                                
                            />
                            <ArrowCircleRightRoundedIcon 
                                className = "arrowRight" 
                                onClick = {rightArrow}
                                sx={{ fontSize: "50px",
                                "& :hover": { color: "#526fce" } }} 
                            />
                        </Stack>
                    </Stack>
                    
                </Stack>
                
                
            </Dialog>
            
        </div>
    )
}
export default ArtBox;