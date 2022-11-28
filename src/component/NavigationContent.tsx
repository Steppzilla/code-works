import {ArticleData} from "../model/ArticleData";
import "./NavigationContent.css";

type NavigationContentProps = {
    articles: ArticleData[],
    setActualArticle: (index: number|undefined) => void,
    showEditor: (showEdit: boolean) => void,
}

export default function NavigationContent({setActualArticle, articles, showEditor}: NavigationContentProps) {

    const handleEdit = () => {
        setActualArticle(undefined);
        showEditor(true)
    }

    return (
        <nav>
            Java:<br/>
            {articles.map(
                (singleArticle, sI) => {
                    if (singleArticle.h1 === "Java") {
                        return <button key={sI}
                                       onClick={() => setActualArticle(sI)}
                        >{singleArticle.h2}</button>
                    } else {
                        return <> unkategorisierter Artikel </>
                    }
                }
            )
            }
            <button onClick={() => handleEdit()}> Editor</button>
        </nav>
    )
}
