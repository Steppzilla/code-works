import React, {useState} from 'react';
import './App.css';
import Article from "./component/Article";
import JsonView from "./component/JsonView/JsonView";
import NavigationContent from "./component/NavigationContent";
import {ArticleData} from "./model/ArticleData";
import {articles} from "./static/codeStringExamples";

function App() {
    const [art, setArt] = useState<ArticleData[]>(articles);

    const [actualArticle, setActualArticle] = useState<ArticleData>()
    const changeActualArticle = (index: number) => {
        setActualArticle(art[index]);
    }

    return (
        <div className="App">
            <NavigationContent setActualArticle={changeActualArticle} articles={art}/>
            {actualArticle && <Article article={actualArticle}/>}
            {actualArticle && <JsonView article={actualArticle}/>}
        </div>
    )
}

export default App;
