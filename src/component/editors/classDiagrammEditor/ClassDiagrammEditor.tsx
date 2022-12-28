import "./ClassDiagrammEditor.css";
import SingleBoxEditor from "./SingleBoxEditor";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { ClassDiagramData } from "../../../model/ClassDiagramData";
import SubmitResetButton from "../SubmitResetButton";

type ClassDiagramProps = {
    editData: (data: ClassDiagramData, event: FormEvent) => void,
    data: ClassDiagramData | undefined,
    cancel: () => void,
    setShowEditor: (showEdit: boolean) => void,
}

type SingleClassDiagram = {
    color: string,
    diagramTitle: string,
    attributeList: { attributeName: string, attributeType: string | undefined }[]
}

export default function ClassDiagrammEditor(props: ClassDiagramProps) {
    const emptySingleDiagram: SingleClassDiagram = {
        color: "green",
        diagramTitle: "",
        attributeList: [{ attributeName: "", attributeType: undefined }]
    }
    const [data, setData] = useState<SingleClassDiagram[] | undefined>(
        props.data ? [...props.data.diagramData] : [emptySingleDiagram]
    )
    const [title, setTitle] = useState<string>(props.data ? props.data.subTitle : "Klassen-Diagramm")

    const handleDiagramCounter = (add: boolean, event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (add) {
            const newObject: SingleClassDiagram = {
                color: "green", diagramTitle: "klasse", attributeList: [
                    { attributeName: "", attributeType: "" }
                ]
            }
            data && setData([...data, newObject]);
        } else if (data) {
            let columnCounter = data.length;
            setData(data.slice(0, columnCounter - 1));
        }
    }

    const changeClassTitle = (index: number, event: ChangeEvent) => {
        event.preventDefault()
        const val = event.target as HTMLFormElement;
        if (data) {
            const editClass = data[index];
            editClass.diagramTitle = val.value;
            const newData: SingleClassDiagram[] = [...data];
            newData[index] = { ...editClass };
            setData([...newData]);
        }
    }

    const changeAttribute = (classIndex: number, rowIndex: number, type: boolean, event: ChangeEvent<HTMLInputElement>) => {
        if (data) {
            const editData = data;
            const actualAttributes = editData[classIndex].attributeList
            // Wenn letztes Inputfeld beschrieben wird, neues Element anlegen:
            if (actualAttributes.length - 1 === rowIndex) {
                actualAttributes.push({ attributeName: "", attributeType: "" });
            }
            //
            if (type) {
                editData[classIndex].attributeList[rowIndex].attributeType = event.target.value;
                setData([...editData])
                return
            }
            editData[classIndex].attributeList[rowIndex].attributeName = event.target.value;
            setData([...editData])
        }
    }

    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleRows = (index: number, add: boolean, event: MouseEvent) => {
        event.preventDefault();
        if (data) {
            if (add) {
                data[index].attributeList.push({ attributeName: "", attributeType: "" });
                setData([...data]);
            } else {
                const attributes = data[index].attributeList;
                if (attributes.length > 1) {
                    data[index].attributeList = attributes.slice(0, data[index].attributeList.length - 1);
                    setData([...data]);
                } else if (attributes.length === 1) {
                    const editData = data;
                    //ganze klasse löschen:
                    editData.splice(index, 1);
                    setData([...editData])
                }
            }
        }
    }

    const setColor = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        if (data) {
            data[index].color = event.target.value;
            setData([...data])
        }
    }

    const handleSubmit = (event: FormEvent) => {
        if (data) {
            const cleanedData = data.filter(ele => isValidClassElement(ele))
            if (cleanedData.length > 0) {
                const diagramData: ClassDiagramData = {
                    dataType: "diagram", subTitle: title, diagramData: cleanedData
                }
                props.editData(diagramData, event);
                setTitle("");
                setData([emptySingleDiagram]);
            } else {
                event.preventDefault();
            }
        }
    }

    const handleReset = (event: FormEvent) => {
        event.preventDefault();
        props.cancel();
    }

    const isValidClassElement = (classElement: SingleClassDiagram) => {
        classElement.attributeList = classElement.attributeList.filter(attr => isValidRow(attr));
        return (classElement.diagramTitle.length > 0 && classElement.attributeList.length > 0 && classElement.color.length > 0);
    }

    const isValidRow = (row: { attributeName: string, attributeType: string | undefined }) => {
        return (row.attributeName.length > 0);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={"editorBox"}
            onReset={(event) => handleReset(event)} >
            <input onChange={(event) => changeTitle(event)} value={title} type={"input"} />
            <div id={"classDiagramEditor"}>
                Listenelemente hinzufügen / löschen: &nbsp;
                <button type={"button"} onClick={(event) => handleDiagramCounter(false, event)}>-</button>
                <button type={"button"} onClick={(event) => handleDiagramCounter(true, event)}>+</button>

                <div className={"diagramBox"}>
                    {data?.map((element, eleIndex) =>
                        <SingleBoxEditor
                            key={eleIndex}
                            data={data}
                            element={element}
                            changeAttribute={changeAttribute}
                            index={eleIndex}
                            changeTitle={changeClassTitle}
                            handleRows={handleRows}
                            setColor={setColor}
                        />
                    )}
                </div>
            </div>
            <SubmitResetButton disabledReset={false} disabledSubmit={false} />
        </form>
    )
}
