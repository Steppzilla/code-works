import {styleArray, styleNames} from "../static/themes";
import {CSSProperties} from "react";
import "./Article.css";
import CodeBox from "./viewBoxes/codeBoxes/CodeBox";
import TextBox from "./viewBoxes/TextBox";
import ClassDiagramm from "./viewBoxes/classDiagramm/ClassDiagramm";
import {isCodeType, isDiagramType, isListType, isTableType, isTextType} from "../model/ComponentData";
import List from "./viewBoxes/List";
import Table from "./viewBoxes/Table";
import DateComp from "./JsonView/DateComp";
import {ArticleData} from "../model/ArticleData";

type ArticleProps = {
    article: ArticleData,
}

export default function Article({article}: ArticleProps) {

    const actualStyle: { [key: string]: CSSProperties; } = styleArray[1];
    const actualStyleName: string = styleNames[1];

    return (
        <article>
            {article.h1 && <h1> {article.h1}
                <div className={"right"}><DateComp date={article.date}/></div>
            </h1>}
            {article.h2 && <h2>{article.h2}</h2>}
            {article.data.map((block, b) => <div key={b}>
                    {isTextType(block) && <TextBox title={block.title} paragraphs={block.paragraphs}/>}
                    {isCodeType(block) && <CodeBox
                        title={block.title}
                        language={block.language}
                        actualStyle={actualStyle}
                        actualStyleName={actualStyleName}
                        inputString={block.data}/>}
                    {isListType(block) && <List data={block.paragraphs} sorted={block.sorted} title={block.title}/>}
                    {isTableType(block) &&
                        <Table columns={block.rows} titles={block.titles} title={block.title}/>}
                    {isDiagramType(block) && <ClassDiagramm data={block.diagramData}/>}
                </div>
            )}
        </article>
    )
}
