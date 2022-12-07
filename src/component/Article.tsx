import { ChangeEvent, useState } from "react";
import "./Article.css";
import DateComp from "./JsonView/DateComp";
import { ArticleData } from "../model/ArticleData";
import ArticleItem from "./ArticleItem";
import ArticleNaviagator from "./ArticleNavigator";
import ArticleEditor from "./ArticleEditor";
import { ComponentData } from "../model/ComponentData";

type ArticleProps = {
    articles: ArticleData[],
}

export default function Article({ articles }: ArticleProps) {

    const typesString = ["Text", "Code", "Liste", "Tabelle", "Diagramm"];

    const newArticle = {
        h1: "",
        h2: "",
        collections: [],
        date: new Date(),
        data: []
    };

    const [actualArticle, setActualArticle] = useState<ArticleData>(newArticle)
    const [showEditor, setShowEditor] = useState<boolean>(false);

    const changeActualArticle = (index: number | undefined) => {
        setShowEditor(false);
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
    const [actualEditor, setActualEditor] = useState<string | undefined>(undefined)

    const choseEditor = (t: string) => {
        setActualEditor(t);
    }

    return (
        <>
            <ArticleNaviagator
                articles={articles}
                setActualArticle={changeActualArticle}
                showEditor={setShowEditor} />
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
                    <ArticleItem key={b} content={block} innerIndex={b} editComponent={editArticle} />
                )}
                <div>
                    Füge neues Element hinzu:
                    {typesString.map((type, t) => <button key={t} onClick={() => choseEditor(type)}>{type}</button>)}
                </div>
                <ArticleEditor 
                actualEditor={actualEditor}
                data={undefined} 
                changeComponent={editArticle} 
                innerIndex={undefined} />
            </article>
        </>
    )
}
