import React from 'react';
import './App.css';
import Article from "./component/Article";
import TableEditor from "./component/textBoxes/TableEditor";
import JSONView from "./component/JSON-view/JSON-view";

function App() {
    return (
        <div className="App">
            <Article/>
            <p> TableEditor</p>
            <TableEditor/>
            <JSONView/>
        </div>
    );
}

export default App;
