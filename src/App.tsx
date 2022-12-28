import './App.css';
import Article from "./component/Article";
import {ArticleData} from "./model/ArticleData";
import useArticles from './useArticles';
import {useEffect} from "react";


function App() {
    const {allCategories, articles, getArticles, addArticle} = useArticles();
    
    return (
        <div className="App">
            <Article
                articles={articles} allCategories={allCategories} addArticle={addArticle}
            />
        </div>
    )
}

export default App;
