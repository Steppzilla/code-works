import {CSSProperties, useState} from "react";
import {ComponentData, isCodeType, isDiagramType, isListType, isTableType, isTextType} from "../model/ComponentData";
import "./ArticleItem.css";
import ClassDiagramm from "./viewBoxes/classDiagramm/ClassDiagramm";
import CodeBox from "./viewBoxes/codeBoxes/CodeBox";
import List from "./viewBoxes/List";
import Table from "./viewBoxes/Table";
import TextBox from './viewBoxes/TextBox';
import editImage from '../icons/edit.png';
import deleteImage from '../icons/delete.png';
import useThemes from "../useThemes";

type ArticleItemProps = {
    content: ComponentData | undefined,
    innerIndex: number | undefined,

}

export default function ArticleItem({content, innerIndex}: ArticleItemProps) {
    const {styleNames, themes} = useThemes();

    const actualStyle: { [key: string]: CSSProperties; } = themes[1];
    const actualStyleName: string = styleNames[1];


    return (<>
            <div className="articleItem">
                <div>
                    {
                        (content && isTextType(content)) &&
                        <TextBox title={content.subTitle} text={content.dataText}/>
                    }
                    {
                        (content && isCodeType(content)) &&
                        <CodeBox title={content.subTitle}
                                 language={content.codeLanguage}
                                 actualStyle={actualStyle}
                                 actualStyleName={actualStyleName}
                                 inputString={content.code}
                                 showLineNumbers={content.sortedList}
                        />
                    }
                    {
                        (content && isListType(content)) &&
                        <List data={content.paragraphs} sorted={content.sortedList} title={content.subTitle}/>}
                    {
                        (content && isTableType(content)) &&
                        <Table columns={content.tableRows} titles={content.tableTitles} title={content.subTitle} widths={content.tableWidths}/>
                    }
                    {(content && isDiagramType(content)) &&
                        <ClassDiagramm title={content.subTitle} data={content.diagramData}/>}
                </div>
            </div>
        </>
    )
}
