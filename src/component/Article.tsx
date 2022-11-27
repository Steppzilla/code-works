import {styleArray, styleNames} from "../static/themes";
import {CSSProperties, useState} from "react";
import CodeStylePicker from './editors/codeEditor/stylePicker/CodeStylePicker';
import "./Article.css";
import CodeBox from "./viewBoxes/codeBoxes/CodeBox";
import TextBox from "./viewBoxes/TextBox";
import CodeBoxEditor from "./editors/codeEditor/CodeBoxEditor";
import {article} from "../static/codeStringExamples";
import ClassDiagramm from "./viewBoxes/classDiagramm/ClassDiagramm";
import {isCodeType, isDiagramType, isListType, isTableType, isTextType} from "../model/ComponentData";
import List from "./viewBoxes/List";
import Table from "./viewBoxes/Table";

export default function Article() {

    const [actualStyle, setActualStyle] = useState<{ [key: string]: CSSProperties; }>(styleArray[1]);
    const [actualStyleName, setActualStyleName] = useState<string>(styleNames[1]);

    return (
        <>
            {article.h1 && <h1> {article.h1} </h1>}
            {article.h2 && <h2>{article.h2}</h2>}
            {article.data.map((block, b) => <div key={b}>
                    {isTextType(block) && <TextBox  title={block.title} paragraphs={block.paragraphs}/>}
                    {isCodeType(block) && <CodeBox
                                                   title={block.title}
                                                   language={block.language}
                                                   actualStyle={actualStyle}
                                                   actualStyleName={actualStyleName}
                                                   inputString={block.data}/>}
                    {isListType(block) && <List  data={block.paragraphs} sorted={block.sorted} title={block.title}/>}
                    {isTableType(block) &&
                        <Table  columns={block.columns} titles={block.titles} title={block.title}/>}
                    {isDiagramType(block) && <ClassDiagramm data={block.diagramData}/>}
                </div>
            )}
            <CodeStylePicker key={"key"}
                             setActualStyle={setActualStyle}
                             setActualStyleName={setActualStyleName}
                             actualChosen={actualStyle}
            />

            <CodeBoxEditor key="codebox" actualStyleName={actualStyleName} actualStyle={actualStyle}/>
        </>
    )
}
