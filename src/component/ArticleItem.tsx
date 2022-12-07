import { CSSProperties } from "react";
import { ComponentData, isCodeType, isDiagramType, isListType, isTableType, isTextType } from "../model/ComponentData";
import { styleArray, styleNames } from "../static/themes";
import ArticleEditor from "./ArticleEditor";
import ClassDiagramm from "./viewBoxes/classDiagramm/ClassDiagramm";
import CodeBox from "./viewBoxes/codeBoxes/CodeBox";
import List from "./viewBoxes/List";
import Table from "./viewBoxes/Table";
import TextBox from "./viewBoxes/TextBox";

type ArticleItemProps = {
    content: ComponentData,
    innerIndex: number,
    editComponent: (data: ComponentData, innerIndex: number | undefined) => void,
}

export default function ArticleItem({ content, innerIndex, editComponent }: ArticleItemProps) {

    const actualStyle: { [key: string]: CSSProperties; } = styleArray[1];
    const actualStyleName: string = styleNames[1];

    const handleEdit = () => {

    }

    const handleSave = () => {

    }

    const handleDelete = () => {

    }


    return (
        <div>
            {isTextType(content) && <TextBox title={content.title} paragraphs={content.paragraphs} />}
            {
                isCodeType(content) && <CodeBox title={content.title}
                    language={content.language}
                    actualStyle={actualStyle}
                    actualStyleName={actualStyleName}
                    inputString={content.data}
                    showLineNumbers={content.hasLineNumbers}
                />
            }
            {isListType(content) && <List data={content.paragraphs} sorted={content.sorted} title={content.title} />}
            {
                isTableType(content) &&
                <Table columns={content.rows} titles={content.titles} title={content.title} />
            }
            {isDiagramType(content) && <ClassDiagramm title={content.title} data={content.diagramData} />}
            {
                <>
                    <button onClick={handleEdit} > edit</button>
                    <button onClick={handleDelete}> delete</button>
                    <button onClick={handleSave}> save</button>
                </>
            }
            {<ArticleEditor actualEditor={content.type}
                changeComponent={editComponent}
                data={content}
                innerIndex={innerIndex} />}
        </div >
    )
}