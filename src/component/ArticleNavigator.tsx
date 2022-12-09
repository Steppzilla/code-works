import { ArticleData } from "../model/ArticleData";
import "./ArticleNavigator.css";

type ArticleNavigatorProps = {
    articles: ArticleData[],
    setActualArticle: (index: number | undefined) => void,
}

export default function ArticleNaviagator({ setActualArticle, articles }: ArticleNavigatorProps) {

    const handleEdit = () => {
        setActualArticle(undefined);
    }

    const chooseArticle = (articleIndex: number) => {
        setActualArticle(articleIndex);
    }

    return (
        <nav>
            Java:<br />
            {articles.map(
                (singleArticle, sI) => {
                    if (singleArticle.h1 === "Java") {
                        return <button key={sI}
                            onClick={() => chooseArticle(sI)}
                        >{singleArticle.h2}</button>
                    } else {
                        return <> unkategorisierter Artikel </>
                    }
                }
            )
            }
            <button onClick={() => handleEdit()}> Neuer Artikel</button>
        </nav>
    )
}
