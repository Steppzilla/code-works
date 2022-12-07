import './App.css';
import Article from "./component/Article";
import { ArticleData } from "./model/ArticleData";
import { articles } from "./static/codeStringExamples";

function App() {
    const art: ArticleData[] = articles;

    return (
        <div className="App">
            <Article
                articles={art}
            />
        </div>
    )
}

export default App;
