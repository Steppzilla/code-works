import "./Article.css";
import "./articleEditor.css";
import { FormEvent, useState } from "react";
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
    cancel: () => void,
    setShowEditor: (showEdit: boolean) => void,
}

export default function ArticleEditor({ data, changeComponent, innerIndex, actualEditor, cancel, setShowEditor }: ArticleEditorProps) {

    const typesString = ["Text", "Code", "Liste", "Tabelle", "Diagramm"];
    const [chosenEditor, setChosenEditor] = useState<string | undefined>(undefined)
    const [showChooser, setShowChooser] = useState<boolean>(false);

    const handleEditDataAttribute = (thisData: ComponentData, event: FormEvent) => {
        event.preventDefault();
        if (thisData) {
            changeComponent(thisData, innerIndex)
        }
        setShowEditor(false);
    }

    const chooseEditor = (t: string) => {
        setChosenEditor(t);
    }

    const toggleShowChooser = () => {
        showChooser ? setShowChooser(false) : setShowChooser(true);
        console.log(showChooser)
    }

    return (
        <>
            {!data &&
                <div className="editorChooser" onClick={toggleShowChooser}>
                    {!showChooser &&
                        <div className="toggleEditorButton"> + </div>
                    }
                    {showChooser && typesString.map(
                        (type, t) =>
                            <button key={t}
                                onClick={() =>
                                    chooseEditor(type)}>{type}</button>
                    )}
                </div>}
            {
                <article id={"articleEditor"}>
                    {
                        (data && isTextType(data)) &&
                        <EditTextBox editData={handleEditDataAttribute} data={data} cancel={cancel} setShowEditor={setShowEditor} />}
                    {
                        (!data && chosenEditor === "Text") &&
                        <EditTextBox editData={handleEditDataAttribute} data={undefined} cancel={cancel} setShowEditor={setShowEditor} />
                    }
                    {
                        (data && isCodeType(data)) &&
                        <CodeBoxEditor editData={handleEditDataAttribute} data={data} cancel={cancel} setShowEditor={setShowEditor} />}
                    {
                        (!data && chosenEditor === "Code") &&
                        <CodeBoxEditor editData={handleEditDataAttribute} data={undefined} cancel={cancel} setShowEditor={setShowEditor} />
                    }
                    {
                        (data && isListType(data)) &&
                        <ListEditor editData={handleEditDataAttribute} data={data} cancel={cancel} setShowEditor={setShowEditor} />}
                    {
                        (!data && chosenEditor === "Liste") &&
                        <ListEditor editData={handleEditDataAttribute} data={undefined} cancel={cancel} setShowEditor={setShowEditor} />
                    }
                    {
                        (data && isTableType(data)) &&
                        <TableEditor editData={handleEditDataAttribute} data={data} cancel={cancel} setShowEditor={setShowEditor} />}
                    {
                        (!data && chosenEditor === "Tabelle") &&
                        <TableEditor editData={handleEditDataAttribute} data={undefined} cancel={cancel} setShowEditor={setShowEditor} />
                    }
                    {
                        (data && isDiagramType(data)) &&
                        <ClassDiagrammEditor editData={handleEditDataAttribute} data={data} cancel={cancel} setShowEditor={setShowEditor} />}
                    {
                        (!data && chosenEditor === "Diagramm") &&
                        <ClassDiagrammEditor editData={handleEditDataAttribute} data={undefined} cancel={cancel} setShowEditor={setShowEditor} />
                    }
                </article>
            }
        </>
    )
}
