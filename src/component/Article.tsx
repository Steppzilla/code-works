import {ChangeEvent, useState} from "react";
import "./Article.css";
import DateComp from "./JsonView/DateComp";
import {ArticleData, NewArticleData} from "../model/ArticleData";
import ArticleItem from "./ArticleItem";
import ArticleNaviagator from "./ArticleNavigator";
import {ComponentData} from "../model/ComponentData";
import JsonView from "./JsonView/JsonView";

type ArticleProps = {
    articles: ArticleData[],
    allCategories: string[],
    addArticle: (newArticle: NewArticleData) => void,
}

export default function Article({articles, allCategories, addArticle}: ArticleProps) {

    const [editable, setEditable]=useState<boolean>(false)
    const blankArticle = {
        id: 0,
        date: undefined,
        category: "",
        title: "",
        dataBlock: []
    };

    const [showNav, setShowNav] = useState<boolean>(true)

    const [actualArticle, setActualArticle] = useState<ArticleData>(blankArticle)

    const changeActualArticle = (index: number | undefined) => {
        (typeof index === "number") ? setActualArticle(articles[index]) : setActualArticle(blankArticle);
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

    const handleAddArticle = () => {
        let newArticle = actualArticle as NewArticleData;
        console.log(newArticle)
        addArticle(newArticle)
    }

    const toggleEditable = () => {
        editable? setEditable(false):setEditable(true);
    }

    return (
        <>
            {!showNav&&<button onClick={toggleEditable}> {editable?"Leser-Ansicht": "bearbeiten"}</button>}
            {!showNav && <button onClick={() => setShowNav(true)}>Artikel wählen</button>}
            {showNav && <ArticleNaviagator
                articles={articles}
                setActualArticle={changeActualArticle}
                allCategories={allCategories}
                setEdit = {setEditable}
            />
            }
            <article className={showNav ? "blur hide" : ""}>
                {(!editable) ?
                    <h1> {actualArticle.category}
                        {actualArticle.date && <div className={"right"}><DateComp date={actualArticle.date}/></div>}
                    </h1> :
                    <h1> Kategorie: <input onChange={onCategoryChange}
                                    value={actualArticle.category}/>
                    </h1>
                }
                {(!editable) ? <h2>{actualArticle.title}</h2>
                    :
                    <h2> Titel: <input
                        onChange={(event) => setActualArticle({...actualArticle, title: event.target.value})}
                        value={actualArticle.title}/>
                    </h2>
                }
                {actualArticle.dataBlock.map((block, b) =>
                    <ArticleItem key={crypto.randomUUID()}
                                 content={block}
                                 innerIndex={b}
                                 editComponent={editArticle}
                                 deleteComponent={deleteComponent}/>
                )}
                <ArticleItem key={crypto.randomUUID()}
                             content={undefined}
                             innerIndex={undefined}
                             editComponent={editArticle}
                             deleteComponent={deleteComponent}/>
                <button onClick={() => handleAddArticle()}> addArticle</button>
            </article>
        </>
    )
}
