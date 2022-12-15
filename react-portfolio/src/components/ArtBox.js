import './ArtBox.css';

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

const ArtBox = ({ imageSrc }) => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className = "artBox">
            <img src = {imageSrc[0]} alt = "pic" className = "art_img" onClick={handleToggle}/>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <img src = {imageSrc[0]} alt = "pic" className = "art_img_zoom"/>
            </Backdrop>
            
        </div>
    )
}
export default ArtBox;
