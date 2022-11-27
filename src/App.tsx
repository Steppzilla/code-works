import React from 'react';
import './App.css';
import Article from "./component/Article";
import TableEditor from "./component/editors/TableEditor";
import JsonView from "./component/JsonView/JsonView";
import ClassDiagrammEditor from "./component/editors/classDiagrammEditor/ClassDiagrammEditor";

function App() {
    return (
        <div className="App">
            <ClassDiagrammEditor />
            <Article/>
            <p> TableEditor</p>
            <TableEditor/>
            <JsonView/>
        </div>
    );
}

export default App;
