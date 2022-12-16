import './ArtBox.css';

import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const ArtBox = ({ imageSrc, text }) => {
    const [current, setCurrent] = useState(0)
    const length = imageSrc.length;

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
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
            <img src = {imageSrc[0]} alt = "pic" className = "art_img" onClick={handleToggle}/>

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
                        >
                            <ArrowCircleLeftRoundedIcon 
                                className = "arrow" 
                                onClick = {leftArrow}
                                sx={{ fontSize: "50px" }} 
                            />
                            <ArrowCircleRightRoundedIcon 
                                className = "arrow" 
                                onClick = {rightArrow}
                                sx={{ fontSize: "50px" }} 
                            />
                        </Stack>
                    </Stack>
                    
                </Stack>
                
                
            </Dialog>
            
        </div>
    )
}
export default ArtBox;
