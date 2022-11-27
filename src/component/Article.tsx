import {styleArray, styleNames} from "../static/themes";
import {CSSProperties, useState} from "react";
import CodeStylePicker from './editors/codeEditor/stylePicker/CodeStylePicker';
import "./Article.css";
import CodeBox from "./viewBoxes/codeBoxes/CodeBox";
import Table from "./viewBoxes/Table";
import List from "./viewBoxes/List";
import TextBox from "./viewBoxes/TextBox";
import CodeBoxEditor from "./editors/codeEditor/CodeBoxEditor";
import {article} from "../static/codeStringExamples";
import ClassDiagramm from "./viewBoxes/classDiagramm/ClassDiagramm";

export default function Article() {

    const [actualStyle, setActualStyle] = useState<{ [key: string]: CSSProperties; }>(styleArray[1]);
    const [actualStyleName, setActualStyleName] = useState<string>(styleNames[1]);

    return (
        <>
            {article.h1 && <h1> {article.h1} </h1>}
            {article.h2 && <h2>{article.h2}</h2>}

            {article.data.map((block, b) => {
                if (block.type === "text") {
                    return <TextBox key={b} title={block.title} paragraphs={block.paragraphs}/>
                } else if (block.type === "code") {
                    return <CodeBox key={b}
                                    title={block.title}
                                    language={block.language}
                                    actualStyle={actualStyle}
                                    actualStyleName={actualStyleName}
                                    inputString={block.data}/>
                } else if (block.type === "list") {
                    return <List key={b} data={block.paragraphs} sorted={block.sorted} title={block.title}/>
                } else if (block.type === "table") {
                    return <Table key={b} columns={block.columns} titles={block.titles} title={block.title}/>
                } else if (block.type === "diagram") {
                    return <ClassDiagramm key={b} data={block.diagramData}/>
                }else{
                    return ""
                }
            })}

            <CodeStylePicker key={"key"}
                             setActualStyle={setActualStyle}
                             setActualStyleName={setActualStyleName}
                             actualChosen={actualStyle}
            />

            <CodeBoxEditor actualStyleName={actualStyleName} actualStyle={actualStyle}/>
        </>
    )
}
