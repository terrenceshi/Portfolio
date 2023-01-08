import './Article.css';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

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


const externalImg = ({link, imageSrc, windowMode}) => {
    return (
        <a id = "link2" href = {link} target="_blank" rel="noopener noreferrer">
            <img src = {imageSrc} alt = "pic" className = "article_img" 
            style = {imgStyle}/>
        </a>
    )
}
const normalImg = ({link, imageSrc, windowMode}) => {
    return (
        <Link id = "link2" to = {link}>
            <img src = {imageSrc} alt = "pic" className = "article_img"
            style = {imgStyle}/>
        </Link>
    )
}

const Article = ({ imageSrc, link, text, title, external, windowMode }) => {
    let readMore;
    if(external){
        readMore = externalReadMore({link})
    } else {
        readMore = normalReadMore({link})
    }

    let imgLink;
    if(external){
        imgLink = externalImg({link, imageSrc, windowMode})
    } else {
        imgLink = normalImg({link, imageSrc, windowMode})
    }

    const imgStyleOther = {
        marginLeft: 0
    }
    const imgStyle2 = {
        display: "none"
    }
    const imgStyle3 = {
        marginLeft: 30
    }
    
    if(windowMode === 2){
        imgStyle = imgStyle2;
    } else if(windowMode === 3){
        imgStyle = imgStyle3;
    } else{
        imgStyle = imgStyleOther
    }

    return (
        <div className = "article" style = {windowMode === 3 ? {width: 200}:{}}>
            <Paper elevation={2} className = "articlePaper">
                <h2 className = "articleTitle" 
                    style = {windowMode > 2 ? {textAlign: "center", fontSize: "1.4rem"} : {textAlign: "left", fontSize: "2rem"}}>
                    {title}
                </h2>
                <div className = "row" style = {windowMode >= 2 ? {flexDirection: "column-reverse", alignItems: "center"} : {}}>
                    <div>
                        <p className = "articleText" style = {windowMode !== 3 ? { display: "block"} : { display: "none"}}>
                            {text}
                            
                        </p>
                        <p className = "readMore ">{readMore}</p>
                    </div>
                    
                    
                    {imgLink}
                    
                </div>
            </Paper>
            
        </div>
    )
}
export default Article;
