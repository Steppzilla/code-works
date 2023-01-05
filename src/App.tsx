import './App.css';
import Article from "./component/Article";
import {useEffect, useState} from "react";
import {allArticles} from './static/articleIndexing';

function App() {
    const articles = allArticles;

    useEffect(() => {
        let arr: string[] = [];
        const categoryArray: string[] = allArticles.map(article => article.category);
        categoryArray.forEach(entry => {
            if (!arr.includes(entry)) {
                arr.push(entry);
            }
        });
        setAllCategories(arr);
    }, [])
    const [allCategories, setAllCategories] = useState<string[]>([]);

    return (
        <div className="App">
            <Article
                articles={articles} allCategories={allCategories}
            />
        </div>
    )
}

export default App;
