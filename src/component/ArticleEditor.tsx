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
        {
            <article id={"articleEditor"}>
                EDITOR
                {
                    (data && isTextType(data)) &&
                    <EditTextBox editData={handleEditDataAttribute} data={data} />}
                {
                    (!data && actualEditor === "Text") &&
                    <EditTextBox editData={handleEditDataAttribute} data={undefined} />
                }
                {
                    (data && isCodeType(data)) &&
                    <CodeBoxEditor editData={handleEditDataAttribute} data={data} />}
                {
                    (!data && actualEditor === "Code") &&
                    <CodeBoxEditor editData={handleEditDataAttribute} data={undefined} />
                }
                {
                    (data && isListType(data)) &&
                    <ListEditor editData={handleEditDataAttribute} data={data} />}
                {
                    (!data && actualEditor === "Liste") &&
                    <ListEditor editData={handleEditDataAttribute} data={undefined} />
                }
                {
                    (data && isTableType(data)) &&
                    <TableEditor editData={handleEditDataAttribute} data={data} />}
                {
                    (!data && actualEditor === "Tabelle") &&
                    <TableEditor editData={handleEditDataAttribute} data={undefined} />
                }
                {
                    (data && isDiagramType(data)) &&
                    <ClassDiagrammEditor editData={handleEditDataAttribute} data={data} />}
                {
                    (!data && actualEditor === "Diagramm") &&
                    <ClassDiagrammEditor editData={handleEditDataAttribute} data={undefined} />
                }
            </article>
        }</>
    )
}
