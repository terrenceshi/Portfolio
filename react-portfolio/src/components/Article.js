import './Article.css';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';

const externalReadMore = ({link}) => {
    return (
        <a id = "link1" className = "linkText" href={link} target="_blank" rel="noopener noreferrer">
            <Button
                sx={{ fontSize : "1.2rem" }}
            >
                Read More
            </Button>
        </a>
    )
}
const normalReadMore = ({link}) => {
    return (
        <Button
            className = "linkText"
            component = {Link}
            to = {link}
            sx={{ fontSize : "1.2rem" }}
        >
            Read More
        </Button>
    )
}

let imgStyle;

const externalImg = ({link, imageSrc, windowMode, imgLoaded, setImgLoaded}) => {
    return (
        <a id = "link2" href = {link} target="_blank" rel="noopener noreferrer">
            <img src = {imageSrc} alt = "pic" className = {windowMode >= 2 ? "nothing":"article_img"}
                style = {imgLoaded ? {imgStyle} : {display: "none"}} onLoad = {() => setImgLoaded(true)}
            />

            <Skeleton variant="rectangular" width={200} height={200} sx = {{margin: 30/8, marginTop: 15/8, marginLeft: 0}}
                style = {imgLoaded ? {display: "none"} : {}}
            />
        </a>
    )
}
const normalImg = ({link, imageSrc, windowMode, imgLoaded, setImgLoaded}) => {
    return (
        <Link id = "link2" to = {link}>
            <img src = {imageSrc} alt = "pic" className = {windowMode >= 2 ? "nothing":"article_img"}
                style = {imgLoaded ? {imgStyle} : {display: "none"}} onLoad = {() => setImgLoaded(true)}
            />
            <Skeleton variant="rectangular" width={200} height={200} sx = {{margin: 30/8, marginTop: 15/8, marginLeft: 0}}
                style = {imgLoaded ? {display: "none"} : {}}
            />
        </Link>
    )
}

const Article = ({ imageSrc, link, text, title, external, windowMode }) => {
    const [imgLoaded, setImgLoaded] = useState(false)
    
    let readMore;
    if(external){
        readMore = externalReadMore({link})
    } else {
        readMore = normalReadMore({link})
    }

    let imgLink;
    if(external){
        imgLink = externalImg({link, imageSrc, windowMode, imgLoaded, setImgLoaded})
    } else {
        imgLink = normalImg({link, imageSrc, windowMode, imgLoaded, setImgLoaded})
    }

    const imgStyleOther = {
        marginLeft: 0
    }
    const imgStyle2 = {
        display: "none"
    }
    const imgStyle3 = {
        display: "none"
    }
    
    if(windowMode === 2){
        imgStyle = imgStyle2;
    } else if(windowMode === 3){
        imgStyle = imgStyle3;
    } else{
        imgStyle = imgStyleOther
    }

    return (
        <div className = "article">
            <Paper elevation={2} className = "articlePaper">
                <h2 className = "articleTitle" 
                    style = {windowMode === 3 ? {textAlign: "left", fontSize: "1.4rem", padding: 15, paddingBottom:0} 
                                                :
                                                {textAlign: "left", fontSize: "2rem"}}>
                    {title}
                </h2>
                <div className = "row" style = {windowMode >= 2 ? {flexDirection: "column-reverse", alignItems: "center"} : {}}>
                    <div>
                        <p className = "articleText" style = {windowMode === 3 ? {padding: 15}:{}}>
                            {text}
                            
                        </p>
                        <p className = "readMore " style = {windowMode === 3 ? {padding: 15, paddingTop: 0, paddingLeft:15-8}:{}}>
                            {readMore}
                        </p>
                    </div>
                    
                    
                    {imgLink}
                    
                </div>
            </Paper>
            
        </div>
    )
}
export default Article;
