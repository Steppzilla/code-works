import React from 'react';
import './App.css';
import Article from "./component/Article";
import TableEditor from "./component/textBoxes/TableEditor";
import ArticleEditor from "./component/ArticleEditor";

function App() {
    return (
        <div className="App">
            <Article/>
            <p> TableEditor</p>
            <TableEditor/>
            <ArticleEditor/>
        </div>
    );
}

export default App;
