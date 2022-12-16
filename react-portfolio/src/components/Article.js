import './Article.css';

const Article = ({ imageSrc, text }) => {

    return (
        <div className = "article">
            <div className = "row">
                <p>{text}</p>
                <img src = {imageSrc} alt = "pic" className = "article_img" />
            </div>
            
        </div>
    )
}
export default Article;
