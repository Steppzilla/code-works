import {styleArray, styleNames} from "../static/themes";
import {CSSProperties, useState} from "react";
import CodeStylePicker from './CodeStylePicker';
import "./Article.css";
import CodeBox from "./CodeBox";
import Table from "./textBoxes/Table";
import List from "./textBoxes/List";
import TextBox from "./textBoxes/TextBox";
import CodeBoxEditor from "./codeEditor/CodeBoxEditor";
import {article} from "../static/codeStringExamples";
import ClassDiagramm from "./classDiagramm/ClassDiagramm";

export default function Article() {

    const [actualStyle, setActualStyle] = useState<{ [key: string]: CSSProperties; }>(styleArray[0]);
    const [actualStyleName, setActualStyleName] = useState<string>(styleNames[0]);

    return (
        <>
            {article.h1 && <h1> {article.h1} </h1>}
            {article.h2 && <h2>{article.h2}</h2>}

            {article.data.map((block,b) => {
                if (block.type === "text") {
                    return <TextBox key={b} h3={block.h3} paragraphs={block.paragraphs}/>
                } else if (block.type === "code") {
                    return <CodeBox key={b} language={block.language}
                                    actualStyle={actualStyle}
                                    actualStyleName={actualStyleName}
                                    inputString={block.data}/>
                } else if (block.type === "list") {
                    return <List  key={b} data={block.data} sorted={block.sorted}/>
                } else if (block.type === "table") {
                    return <Table key={b} columns={block.columns} titles={block.titles}/>
                }else if (block.type==="diagram"){
                    return <ClassDiagramm data={block.data}/>
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
