import { useEffect, useState } from "react";
import { ArticleData } from "../model/ArticleData";
import { allThemaArray, getAllThemas } from "../static/themes";
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

    useEffect(()=>{
        getAllThemas();
    })

    const [actualThematic, setActualThematic] = useState<string>("Java");

    return (
        <nav>
            <div className="topBar">
                {allThemaArray.map(thema => <button key={thema} onClick={() => setActualThematic(thema)}>{thema}</button>)}
            </div>
            <h1>{actualThematic}</h1>
            {articles.map(
                (singleArticle, sI) => {
                    if (singleArticle.h1 === actualThematic) {
                        return <button key={sI}
                            onClick={() => chooseArticle(sI)}
                        >{singleArticle.h2}</button>
                    }
                }
            )
            }

            <button onClick={() => handleEdit()}> Neuer Artikel</button>
        </nav>
    )
}
