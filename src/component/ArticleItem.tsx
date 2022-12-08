import { CSSProperties, useState } from "react";
import { isFunctionDeclaration } from "typescript";
import { ComponentData, isCodeType, isDiagramType, isListType, isTableType, isTextType } from "../model/ComponentData";
import { styleArray, styleNames } from "../static/themes";
import ArticleEditor from "./ArticleEditor";
import ClassDiagramm from "./viewBoxes/classDiagramm/ClassDiagramm";
import CodeBox from "./viewBoxes/codeBoxes/CodeBox";
import List from "./viewBoxes/List";
import Table from "./viewBoxes/Table";
import TextBox from "./viewBoxes/TextBox";

type ArticleItemProps = {
    content: ComponentData | undefined,
    innerIndex: number | undefined,
    editComponent: (data: ComponentData, innerIndex: number | undefined) => void,
    deleteComponent: (index: number) => void,
}

export default function ArticleItem({ content, innerIndex, editComponent, deleteComponent }: ArticleItemProps) {
    

    const actualStyle: { [key: string]: CSSProperties; } = styleArray[1];
    const actualStyleName: string = styleNames[1];
    const [showEditor, setShowEditor] = useState<boolean>(false);

    const handleEdit = () => {
        setShowEditor(true);
    }

    const handleDelete = () => {
        if (innerIndex) deleteComponent(innerIndex)
    }

    const cancel = () => {
        console.log(content)
        setShowEditor(false)
    }
   

    return (<>
        <div>
            {
                (content && isTextType(content)) &&
                <TextBox title={content.title} paragraphs={content.paragraphs} />
            }
            {
                (content && isCodeType(content)) &&
                <CodeBox title={content.title}
                    language={content.language}
                    actualStyle={actualStyle}
                    actualStyleName={actualStyleName}
                    inputString={content.data}
                    showLineNumbers={content.hasLineNumbers}
                />
            }
            {
                (content && isListType(content)) &&
                <List data={content.paragraphs} sorted={content.sorted} title={content.title} />}
            {
                (content && isTableType(content)) &&
                <Table columns={content.rows} titles={content.titles} title={content.title} />
            }
            {(content && isDiagramType(content)) &&
                <ClassDiagramm title={content.title} data={content.diagramData} />}
            {
                (showEditor||!content) && <ArticleEditor
                    actualEditor={content?content.type:undefined}
                    changeComponent={editComponent}
                    cancel={cancel}
                    data={content}
                    innerIndex={innerIndex}
                    setShowEditor={setShowEditor} />}
                
            {(!showEditor && content) && <div>
                <button onClick={handleEdit} > edit</button>
                <button onClick={handleDelete}> delete</button>
            </div>
            }
        </div >
    </>
    )
}