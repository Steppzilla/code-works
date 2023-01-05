import {ChangeEvent, useState} from "react";
import "./Article.css";
import DateComp from "./JsonView/DateComp";
import {ArticleData} from "../model/ArticleData";
import ArticleItem from "./ArticleItem";
import ArticleNaviagator from "./ArticleNavigator";
import {ComponentData} from "../model/ComponentData";

type ArticleProps = {
    articles: ArticleData[],
    allCategories: string[],
}

export default function Article({articles, allCategories}: ArticleProps) {


    const [showNav, setShowNav] = useState<boolean>(true)

    const [actualArticle, setActualArticle] = useState<ArticleData>(articles[0])

    const changeActualArticle = (index: number | undefined) => {
        (typeof index === "number") ? setActualArticle(articles[index]) : setActualArticle(articles[0]);
        setShowNav(false);
    }

    const onCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setActualArticle({...actualArticle, category: event.target.value})
    }

    const editArticle = (data: ComponentData, innerIndex: number | undefined) => {
        if (actualArticle) {
            const editArticle: ArticleData = actualArticle;
            let dataArray = editArticle.dataBlock;
            if (innerIndex !== undefined) dataArray[innerIndex] = data;
            if (innerIndex === undefined) dataArray.push(data);
            setActualArticle({...actualArticle, "dataBlock": dataArray});
        }
    }

    const deleteComponent = (index: number) => {
        const editArray = actualArticle.dataBlock;
        const filteredArray: ComponentData[] = editArray.filter(
            element => editArray.indexOf(element) !== index)
        setActualArticle({...actualArticle, dataBlock: [...filteredArray]})
    }


    return (
        <>
            {!showNav && <button onClick={() => setShowNav(true)}>Artikel wählen</button>}
            {showNav && <ArticleNaviagator
                articles={articles}
                setActualArticle={changeActualArticle}
                allCategories={allCategories}
            />
            }
            <article className={showNav ? "blur hide" : ""}>
                <h1> {actualArticle.category}
                    {actualArticle.date && <div className={"right"}><DateComp date={actualArticle.date}/></div>}
                </h1>
                {<h2>{actualArticle.title}</h2>
                }
                {actualArticle.dataBlock.map((block, b) =>
                    <ArticleItem key={crypto.randomUUID()}
                                 content={block}
                                 innerIndex={b}
                    />
                )}
                <ArticleItem key={crypto.randomUUID()}
                             content={undefined}
                             innerIndex={undefined}
                />
            </article>
        </>
    )
}
