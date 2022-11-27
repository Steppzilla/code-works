import React from 'react';
import './App.css';
import Article from "./component/Article";
import TableEditor from "./component/editors/TableEditor";
import JSONView from "./component/JSON-view/JSON-view";
import ClassDiagrammEditor from "./component/editors/classDiagrammEditor/ClassDiagrammEditor";

function App() {
    return (
        <div className="App">
            <ClassDiagrammEditor />
            <Article/>
            <p> TableEditor</p>
            <TableEditor/>
            <JSONView/>
        </div>
    );
}

export default App;
