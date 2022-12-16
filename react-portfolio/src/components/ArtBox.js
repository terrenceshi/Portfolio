import './ArtBox.css';

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

import { getImageSize } from 'react-image-size';

const ArtBox = ({ imageSrc, text }) => {
    const imgHeight = imageSrc[0].clientHeight;
    const imgWidth = imageSrc[0].clientWidth;

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        console.log(imageSrc[0].dimensions)
        setOpen(!open);
    };

    const leftArrow = () => {
        
    }

    const rightArrow = () => {

    }

    return (
        <div className = "artBox">
            <img src = {imageSrc[0]} alt = "pic" className = "art_img" onClick={handleToggle}/>

            <Dialog onClose={handleClose} 
                open={open} 
                className = "dialog"
                maxWidth = 'xl'
            >
                {/* <ArrowCircleLeftRoundedIcon className = "arrow" onClick = {leftArrow}/> */}
                {/* <ArrowCircleRightRoundedIcon className = "arrow" onClick = {rightArrow} /> */}
                
                <Stack direction="row">
                    <img src = {imageSrc[0]} alt = "pic" className = "art_img_zoom" style={{ overflow: "hidden" }} />

                    <p className = "artText">{text}</p>
                </Stack>
                
                
            </Dialog>
            
        </div>
    )
}
export default ArtBox;
