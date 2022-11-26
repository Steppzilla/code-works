import React from 'react';
import './App.css';
import Article from "./component/Article";
import TableEditor from "./component/textBoxes/TableEditor";

function App() {
    return (
        <div className="App">
            <Article/>
            <p> TableEditor</p>
            <TableEditor/>

        </div>
    );
}

export default App;
