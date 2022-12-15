import './ArtBox.css';

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import disableScroll from 'disable-scroll';

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const ArtBox = ({ imageSrc }) => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        disableScroll.off();
    };
    const handleToggle = () => {
        setOpen(!open);
        disableScroll.on();
    };

    const leftArrow = () => {
        
    }

    const rightArrow = () => {

    }

    return (
        <div className = "artBox">
            <img src = {imageSrc[0]} alt = "pic" className = "art_img" onClick={handleToggle}/>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <ArrowCircleLeftRoundedIcon className = "arrow" onClick = {leftArrow}/>
                <img src = {imageSrc[0]} alt = "pic" className = "art_img_zoom"/>
                <ArrowCircleRightRoundedIcon className = "arrow" onClick = {rightArrow} />
            </Backdrop>
            
        </div>
    )
}
export default ArtBox;
