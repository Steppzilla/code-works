import React from 'react';
import './App.css';
import Article from "./component/Article";
import ClassDiagramm from "./component/classDiagramm/ClassDiagramm";

function App() {
  return (
    <div className="App">
        <ClassDiagramm/>
      <Article/>
    </div>
  );
}

export default App;
