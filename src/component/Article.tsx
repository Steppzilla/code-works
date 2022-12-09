import { ChangeEvent, useState } from "react";
import "./Article.css";
import DateComp from "./JsonView/DateComp";
import { ArticleData } from "../model/ArticleData";
import ArticleItem from "./ArticleItem";
import ArticleNaviagator from "./ArticleNavigator";
import { ComponentData } from "../model/ComponentData";
import JsonView from "./JsonView/JsonView";

type ArticleProps = {
    articles: ArticleData[],
}

export default function Article({ articles }: ArticleProps) {

    const newArticle = {
        h1: "",
        h2: "",
        collections: [],
        date: new Date(),
        data: []
    };

    const [actualArticle, setActualArticle] = useState<ArticleData>(newArticle)

    const changeActualArticle = (index: number | undefined) => {
        (typeof index === "number") ? setActualArticle(articles[index]) : setActualArticle(newArticle);
    }

    const onH1Change = (event: ChangeEvent<HTMLInputElement>) => {
        setActualArticle({ ...actualArticle, h1: event?.target.value })
    }

    const editArticle = (data: ComponentData, innerIndex: number | undefined) => {
        if (actualArticle) {
            const editArticle: ArticleData = actualArticle;
            let dataArray = editArticle.data;
            if (innerIndex !== undefined) dataArray[innerIndex] = data;
            if (innerIndex === undefined) dataArray.push(data);
            setActualArticle({ ...actualArticle, "data": dataArray });
        }
    }

    const deleteComponent = (index: number) => {
        const editArray = actualArticle.data;
        const filteredArray: ComponentData[] = editArray.filter(
            element => editArray.indexOf(element) !== index)
        setActualArticle({ ...actualArticle, data: [...filteredArray] })
    }

    return (
        <>
            <ArticleNaviagator
                articles={articles}
                setActualArticle={changeActualArticle} />
            <article>
                {(actualArticle.h1) ?
                    <h1> {actualArticle.h1}
                        <div className={"right"}><DateComp date={actualArticle.date} /></div>
                    </h1> :
                    <h1> h1: <input onChange={onH1Change}
                        value={actualArticle.h1} />
                    </h1>
                }
                {(actualArticle.h2) ? <h2>{actualArticle.h2}</h2>
                    :
                    <h2> h2: <input onChange={(event) => setActualArticle({ ...actualArticle, h2: event.target.value })}
                        value={actualArticle.h2} />
                    </h2>
                }
                {actualArticle.data.map((block, b) =>
                    <ArticleItem key={crypto.randomUUID()}
                        content={block}
                        innerIndex={b}
                        editComponent={editArticle}
                        deleteComponent={deleteComponent} />
                )}
                <ArticleItem key={crypto.randomUUID()}
                    content={undefined}
                    innerIndex={undefined}
                    editComponent={editArticle}
                    deleteComponent={deleteComponent} />
                <JsonView article={actualArticle} />
            </article>
        </>
    )
}
