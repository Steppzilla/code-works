import {useEffect, useState} from "react";
import {ArticleData} from "../model/ArticleData";
import "./ArticleNavigator.css";

type ArticleNavigatorProps = {
    articles: ArticleData[],
    setActualArticle: (index: number | undefined) => void,
    allCategories: string[],
}

export default function ArticleNaviagator({setActualArticle, articles, allCategories}: ArticleNavigatorProps) {

    const handleEdit = () => {
        setActualArticle(undefined);
    }

    const chooseArticle = (articleIndex: number) => {
        setActualArticle(articleIndex);
    }

    const [actualThematic, setActualThematic] = useState<string>("f");

    return (
        <nav>
            <div className="topBar">
                {allCategories.map(thema => <button key={thema}
                                                    onClick={() => setActualThematic(thema)}>{thema}</button>)}
            </div>
            <h1>{actualThematic}</h1>
            {articles.map(
                (singleArticle, sI) => {
                    if (singleArticle.category === actualThematic) {
                        return <button key={sI}
                                       onClick={() => chooseArticle(sI)}
                        >{singleArticle.title}</button>
                    }
                }
            )
            }

            <button onClick={() => handleEdit()}> Neuer Artikel</button>
        </nav>
    )
}
