import "./Article.css";
import CodeBox from "./viewBoxes/codeBoxes/CodeBox";
import TextBox from "./viewBoxes/TextBox";
import ClassDiagramm from "./viewBoxes/classDiagramm/ClassDiagramm";
import {isCodeType, isDiagramType, isListType, isTableType, isTextType} from "../model/ComponentData";
import List from "./viewBoxes/List";
import Table from "./viewBoxes/Table";
import DateComp from "./JsonView/DateComp";
import {ArticleData} from "../model/ArticleData";
import {styleArray, styleNames} from "../static/themes";
import {useState} from "react";
import EditTextBox from "./editors/EditTextBox";
import CodeBoxEditor from "./editors/codeEditor/CodeBoxEditor";
import ListEditor from "./editors/ListEditor";
import TableEditor from "./editors/TableEditor";
import ClassDiagrammEditor from "./editors/classDiagrammEditor/ClassDiagrammEditor";

type ArticleEditorProps = {
    article: ArticleData | undefined,
}

export default function ArticleEditor({article}: ArticleEditorProps) {

    const typesString = ["Text", "Code", "Liste", "Tabelle", "Diagramm"];
    const [actualEditor, setActualEditor] = useState<string | undefined>(undefined)

    const choseEditor = (t: string) => {
        setActualEditor(t);
    }

    return (
        <article>
            {article &&
                <>
                    {article.h1 && <h1> {article.h1}
                        <div className={"right"}><DateComp date={article.date}/></div>
                    </h1>}
                    {article.h2 && <h2>{article.h2}</h2>}
                    {article.data.map((block, b) => <div key={b}>
                            {isTextType(block) && <TextBox title={block.title} paragraphs={block.paragraphs}/>}
                            {isCodeType(block) && <CodeBox
                                title={block.title}
                                language={block.language}
                                actualStyle={styleArray[1]}
                                actualStyleName={styleNames[1]}
                                inputString={block.data}/>}
                            {isListType(block) && <List data={block.paragraphs} sorted={block.sorted} title={block.title}/>}
                            {isTableType(block) &&
                                <Table columns={block.rows} titles={block.titles} title={block.title}/>}
                            {isDiagramType(block) && <ClassDiagramm data={block.diagramData}/>}
                        </div>
                    )}
                </>
            }
            <div>
                Füge neues Element hinzu:
                {typesString.map((type, t) => <button key={t} onClick={() => choseEditor(type)}>{type}</button>)}
            </div>
            {actualEditor === "Text" && <EditTextBox/>}
            {actualEditor === "Code" && <CodeBoxEditor/>}
            {actualEditor === "Liste" && <ListEditor/>}
            {actualEditor === "Tabelle" && <TableEditor/>}
            {actualEditor === "Diagramm" && <ClassDiagrammEditor/>}
        </article>
    )
}
