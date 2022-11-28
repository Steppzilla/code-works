import {ArticleData} from "../model/ArticleData";
import "./NavigationContent.css";

type NavigationContentProps = {
    articles: ArticleData[],
    setActualArticle: (index: number) => void,
}

export default function NavigationContent({setActualArticle, articles}: NavigationContentProps) {


    return (
        <nav>
            Java:<br/>
            {articles.map(
                (singleArticle, sI) => {
                    if (singleArticle.h1 === "Java") {
                        return <button key={sI}
                                       onClick={() => setActualArticle(sI)}
                        >{singleArticle.h2}</button>
                    }
                    else{
                        return <> unkategorisierter Artikel </>
                    }
                }
            )
            }
        </nav>
    )
}
