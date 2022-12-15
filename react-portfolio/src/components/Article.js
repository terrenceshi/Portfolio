import './Article.css';

const Article = ({ imageSrc }) => {

    return (
        <div className = "article">
            <div className = "row">
                <p>sasdfgwas</p>
                <img src = {imageSrc} alt = "pic" className = "article_img" />
            </div>
            
        </div>
    )
}
export default Article;
