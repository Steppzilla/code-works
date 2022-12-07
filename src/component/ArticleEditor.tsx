import "./Article.css";
import "./articleEditor.css";
import { FormEvent } from "react";
import EditTextBox from "./editors/EditTextBox";
import CodeBoxEditor from "./editors/codeEditor/CodeBoxEditor";
import ListEditor from "./editors/ListEditor";
import TableEditor from "./editors/TableEditor";
import ClassDiagrammEditor from "./editors/classDiagrammEditor/ClassDiagrammEditor";
import { ComponentData, isCodeType, isDiagramType, isListType, isTableType, isTextType } from "../model/ComponentData";

type ArticleEditorProps = {
    data: ComponentData | undefined,
    changeComponent: (data: ComponentData, innerIndex: number | undefined) => void,
    innerIndex: number | undefined,
    actualEditor: string | undefined,
}

export default function ArticleEditor({ data, changeComponent, innerIndex, actualEditor }: ArticleEditorProps) {

    const handleEditDataAttribute = (data: ComponentData, event: FormEvent) => {
        event.preventDefault();
        if (data) {
            changeComponent(data, innerIndex)
        }
    }

    return (<>
        {data &&
            <article id={"articleEditor"}>
                EDITOR
                {isTextType(data) && <EditTextBox editData={handleEditDataAttribute} data={data} />}
                {isCodeType(data) && <CodeBoxEditor editData={handleEditDataAttribute} data={data} />}
                {isListType(data) && <ListEditor editData={handleEditDataAttribute} data={data} />}
                {isTableType(data) && <TableEditor editData={handleEditDataAttribute} data={data} />}
                {isDiagramType(data) && <ClassDiagrammEditor editData={handleEditDataAttribute} data={data} />}
            </article>
        }</>
    )
}
