import Article from "./components/Article.js"
import b2n from "./assets/cs_thumbs/b2n.png"

function CS() {
    return (
      <div className="CS">
        <div className = "bio">
          <p>hi my name is terrence i like bimm uh text3</p>
        </div>

        <Article imageSrc={b2n} text = {"fuck chiggas"} />
  
      </div>
    );
  }
  
  export default CS;
  