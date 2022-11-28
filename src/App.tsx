import React from 'react';
import './App.css';
import Article from "./component/Article";
import JsonView from "./component/JsonView/JsonView";

function App() {
    return (
        <div className="App">
            <Article/>
            <JsonView/>
        </div>
    );
}

export default App;
