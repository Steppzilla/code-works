import {useEffect, useState} from "react";
import {ArticleData} from "../model/ArticleData";
import "./ArticleNavigator.css";

type ArticleNavigatorProps = {
    articles: ArticleData[],
    setActualArticle: (index: number | undefined) => void,
    allCategories: string[],
    setEdit: (edit: boolean) => void,
}

export default function ArticleNaviagator({setEdit, setActualArticle, articles, allCategories}: ArticleNavigatorProps) {
    const [actualArticles, setActualArticles] = useState<ArticleData[] | undefined>(undefined)
    const [actualThematic, setActualThematic] = useState<string>("Java");


    useEffect(() => {
        chooseTheme(actualThematic);
    }, [actualArticles])


    const handleEdit = () => {
        setActualArticle(undefined);
        setEdit(true);
    }

    const chooseArticle = (articleIndex: number) => {
        setActualArticle(articleIndex);
    }
    const chooseTheme = (thema: string) => {
        const filteredArray = articles.filter(element => element.category === thema);
        setActualArticles(filteredArray);
    }


    return (
        <nav>
            <div className="topBar">
                {allCategories.map(thema => <button key={thema}
                                                    className={(actualThematic===thema)?"chosen":"notChosen"}
                                                    onClick={() => setActualThematic(thema)}>{thema}</button>)}
            </div>
            {/*<h1>{actualThematic}</h1>*/}
            {actualArticles?.map(
                (singleArticle, sI) =>
                    <button key={sI}
                            onClick={() => chooseArticle(sI)}
                    >{singleArticle.title}</button>
            )
            }
            {!actualArticles||actualArticles.length===0 && <div>keine Artikel in dem Thema "{actualThematic}" gefunden</div>}

            <button onClick={() => handleEdit()}> Neuer Artikel</button>
        </nav>
    )
}
