import {useEffect, useState} from "react";
import {ArticleData} from "../model/ArticleData";
import "./ArticleNavigator.css";

type ArticleNavigatorProps = {
    articles: ArticleData[],
    setActualArticle: (index: number | undefined) => void,
    allCategories: string[],
}

export default function ArticleNaviagator({setActualArticle, articles, allCategories}: ArticleNavigatorProps) {

    useEffect(() => {
        newThematic("Java");
    }, [])

    const [actualArticles, setActualArticles] = useState<ArticleData[] | undefined>()
    const [actualThematic, setActualThematic] = useState<string>("Java");

    const chooseArticle = (articleIndex: number) => {
        setActualArticle(articleIndex);
    }

    const newThematic = (thema: string) => {
        setActualThematic(thema);
        const filteredArray = articles.filter(element => element.category === thema);
        setActualArticles(filteredArray);
    }

    return (
        <nav>
            <div className="topBar">
                {allCategories.map(thema =>
                    <button key={thema}
                            className={(actualThematic === thema) ? "chosen" : "notChosen"}
                            onClick={() => newThematic(thema)}>{thema}
                    </button>)}
            </div>
            {actualArticles?.map(
                (singleArticle, sI) =>
                    <button key={sI}
                            onClick={() => chooseArticle(sI)}
                    >{singleArticle.title}
                    </button>
            )
            }
            {!actualArticles || actualArticles.length === 0 &&
                <div>keine Artikel in dem Thema "{actualThematic}" gefunden
                </div>}

        </nav>
    )
}
