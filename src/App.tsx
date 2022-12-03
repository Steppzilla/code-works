import React, {useState} from 'react';
import './App.css';
import Article from "./component/Article";
import JsonView from "./component/JsonView/JsonView";
import NavigationContent from "./component/NavigationContent";
import {ArticleData} from "./model/ArticleData";
import {articles} from "./static/codeStringExamples";
import ArticleEditor from "./component/ArticleEditor";

function App() {
    const art: ArticleData[] = articles;

    const [actualArticle, setActualArticle] = useState<ArticleData | undefined>(undefined)
    const [showEditor, setShowEditor] = useState<boolean>(false);

    const changeActualArticle = (index: number | undefined) => {
        setShowEditor(false);
        (typeof index === "number") ? setActualArticle(art[index]) : setActualArticle(undefined);
    }

    return (
        <div className="App">
            <NavigationContent setActualArticle={changeActualArticle} articles={art} showEditor={setShowEditor}/>
            {actualArticle && <Article article={actualArticle}/>}
            {actualArticle && <JsonView article={actualArticle}/>}
            {showEditor && <ArticleEditor/>}
        </div>
    )
}

export default App;
