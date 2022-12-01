import "./Article.css";
import "./articleEditor.css";
import {ArticleData} from "../model/ArticleData";
import {FormEvent, useState} from "react";
import EditTextBox from "./editors/EditTextBox";
import CodeBoxEditor from "./editors/codeEditor/CodeBoxEditor";
import ListEditor from "./editors/ListEditor";
import TableEditor from "./editors/TableEditor";
import ClassDiagrammEditor from "./editors/classDiagrammEditor/ClassDiagrammEditor";
import {ComponentData} from "../model/ComponentData";
import Article from "./Article";
import JsonView from "./JsonView/JsonView";

export default function ArticleEditor() {

    const typesString = ["Text", "Code", "Liste", "Tabelle", "Diagramm"];
    const [actualEditor, setActualEditor] = useState<string | undefined>(undefined)

    const [actualArticle, setActualArticle] = useState<ArticleData>({
        h1: "",
        h2: "",
        collections: [],
        date: new Date(),
        data: []
    });

    const choseEditor = (t: string) => {
        setActualEditor(t);
    }

    const handleEditDataAttribute = (indeX: number | undefined, data: ComponentData, event: FormEvent) => {
        event.preventDefault();
        const editArticle: ArticleData = actualArticle;
        let dataArray = editArticle.data;
        if (indeX) dataArray[indeX] = data;
        if (!indeX) dataArray.push(data);
        setActualArticle({...actualArticle, "data": dataArray});
        setActualEditor(undefined);
    }

    return (
        <article id={"articleEditor"}>
            <h1> h1: <input/> </h1>
            <h2> h2: <input/> </h2>
            <Article article={actualArticle}/>
            <div>
                Füge neues Element hinzu:
                {typesString.map((type, t) => <button key={t} onClick={() => choseEditor(type)}>{type}</button>)}
            </div>
            {actualEditor === "Text" && <EditTextBox editData={handleEditDataAttribute}/>}
            {actualEditor === "Code" && <CodeBoxEditor editData={handleEditDataAttribute}/>}
            {actualEditor === "Liste" && <ListEditor editData={handleEditDataAttribute}/>}
            {actualEditor === "Tabelle" && <TableEditor editData={handleEditDataAttribute}/>}
            {actualEditor === "Diagramm" && <ClassDiagrammEditor editData={handleEditDataAttribute}/>}
            <JsonView article={actualArticle}/>
        </article>
    )
}
