import './ArtBox.css';

import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

import React from 'react';

const ArtBoxSolo = ({ imageSrc, text, type, title }) => {
    var mtVar = 15
    var mbVar = 15

    if(type === "top"){
        mtVar = 60
    }
    if(type === "bot"){
        mbVar = 60
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
        //console.log(arrowLeftRef.current)
    };

    return (
        <div className = "artBoxSolo">
            <img src = {imageSrc} alt = "pic" className = "art_img" onClick={handleToggle}
                style = {{ margin: "15px", marginTop: `${mtVar}px`, marginBottom: `${mbVar}px` }}/>

            <Dialog onClose={handleClose} 
                open={open} 
                className = "dialog"
                maxWidth = 'xl'
            >
                
                <Stack direction="row">
                    <img src = {imageSrc} alt = "pic" className = "art_img_zoom" style={{ overflow: "hidden" }} />

                    <Stack direction = "column">
                        <h2 className = "artTitle">{title}</h2>
                        <p className = "artText">{text}</p>
                        <Stack direction = "row" 
                            sx = {{margin: 2}}
                            alignItems="center"
                            justifyContent="center"
                            className = "arrows"
                        >

                        </Stack>
                    </Stack>
                    
                </Stack>
                
                
            </Dialog>
            
        </div>
    )
}
export default ArtBoxSolo;
