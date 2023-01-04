import {CSSProperties, useState} from "react";
import {ComponentData, isCodeType, isDiagramType, isListType, isTableType, isTextType} from "../model/ComponentData";
import "./ArticleItem.css";
import ArticleEditor from "./ArticleEditor";
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
    editComponent: (data: ComponentData, innerIndex: number | undefined) => void,
    deleteComponent: (index: number) => void,
}

export default function ArticleItem({content, innerIndex, editComponent, deleteComponent}: ArticleItemProps) {
    const {styleNames, themes} = useThemes();

    const actualStyle: { [key: string]: CSSProperties; } = themes[1];
    const actualStyleName: string = styleNames[1];
    const [showEditor, setShowEditor] = useState<boolean>(false);

    const handleEdit = () => {
        setShowEditor(true);
    }

    const handleDelete = () => {
        if (innerIndex !== undefined) deleteComponent(innerIndex)
    }

    const cancel = () => {
        console.log(content)
        setShowEditor(false)
    }

    return (<>
            <div className="articleItem">
                <div>
                    {
                        (!showEditor&&content && isTextType(content)) &&
                        <TextBox title={content.subTitle} text={content.dataText}/>
                    }
                    {
                        (!showEditor&&content && isCodeType(content)) &&
                        <CodeBox title={content.subTitle}
                                 language={content.codeLanguage}
                                 actualStyle={actualStyle}
                                 actualStyleName={actualStyleName}
                                 inputString={content.code}
                                 showLineNumbers={content.sortedList}
                        />
                    }
                    {
                        (!showEditor&&content && isListType(content)) &&
                        <List data={content.paragraphs} sorted={content.sortedList} title={content.subTitle}/>}
                    {
                        (!showEditor&&content && isTableType(content)) &&
                        <Table columns={content.tableRows} titles={content.tableTitles} title={content.subTitle} widths={content.tableWidths}/>
                    }
                    {(!showEditor&&content && isDiagramType(content)) &&
                        <ClassDiagramm title={content.subTitle} data={content.diagramData}/>}
                    {
                        (showEditor || !content) &&
                        <ArticleEditor
                            actualEditor={content ? content.dataType : undefined}
                            changeComponent={editComponent}
                            cancel={cancel}
                            data={content}
                            innerIndex={innerIndex}
                            setShowEditor={setShowEditor}
                        />}
                </div>

                {(!showEditor && content) && <div>
                    <button onClick={handleEdit}
                            className="editButton">
                        <img src={editImage} alt="editIcon"/>
                    </button>
                    <button onClick={handleDelete} className="deleteButton">
                        <img src={deleteImage} alt="deleteIcon"/>
                    </button>
                </div>
                }
            </div>
        </>
    )
}
