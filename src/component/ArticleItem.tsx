import { CSSProperties, useState } from "react";
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
        deleteComponent(innerIndex)
    }


    return (<>
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
                </>
            }
            {showEditor && <ArticleEditor actualEditor={content.type}
                changeComponent={editComponent}
                data={content}
                innerIndex={innerIndex} />}
        </div >
    </>
    )
}