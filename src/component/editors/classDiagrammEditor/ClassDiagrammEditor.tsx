import "./ClassDiagrammEditor.css";
import SingleBoxEditor from "./SingleBoxEditor";
import {ChangeEvent, FormEvent, MouseEvent, useState} from "react";
import {ClassDiagramData} from "../../../model/ClassDiagramData";

type ClassDiagramProps = {
    editData: (data: ClassDiagramData, event: FormEvent) => void,
    data: ClassDiagramData | undefined,
}

type SingleClassDiagram = {
    color: string,
    title: string,
    attributes: { attribute: string, type: string | undefined }[],
}

export default function ClassDiagrammEditor(props: ClassDiagramProps) {
    const emptySingleDiagram: SingleClassDiagram = {
        color: "green",
        title: "",
        attributes: [{attribute: "", type: undefined}]
    }
    const [data, setData] = useState<SingleClassDiagram[] | undefined>(
        props.data?props.data.diagramData:[emptySingleDiagram]
    )
    const [title, setTitle] = useState<string>(props.data?props.data.title:"Klassen-Diagramm")

    const handleDiagramCounter = (add: boolean, event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (add) {
            const newObject: SingleClassDiagram = {
                color: "green", title: "klasse", attributes: [
                    {attribute: "", type: ""}
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
            editClass.title = val.value;
            const newData: SingleClassDiagram[] = [...data];
            newData[index] = {...editClass};
            setData([...newData]);
        }
    }

    const changeAttribute = (classIndex: number, rowIndex: number, type: boolean, event: ChangeEvent<HTMLInputElement>) => {
        if (data) {
            const editData = data;
            const actualAttributes = editData[classIndex].attributes
            // Wenn letztes Inputfeld beschrieben wird, neues Element anlegen:
            if (actualAttributes.length - 1 === rowIndex) {
                actualAttributes.push({attribute: "", type: ""});
            }
            //
            if (type) {
                editData[classIndex].attributes[rowIndex].type = event.target.value;
                setData([...editData])
                return
            }
            editData[classIndex].attributes[rowIndex].attribute = event.target.value;
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
                data[index].attributes.push({attribute: "", type: ""});
                setData([...data]);
            } else {
                const attributes = data[index].attributes;
                if (attributes.length > 1) {
                    data[index].attributes = attributes.slice(0, data[index].attributes.length - 1);
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
            if(cleanedData.length>0) {
                const diagramData: ClassDiagramData = {
                    type: "diagram", title: title, diagramData: cleanedData
                }
                props.editData(diagramData, event);
                setTitle("");
                setData([emptySingleDiagram]);
            }else{
                event.preventDefault();
            }
        }
    }

    const isValidClassElement = (classElement: SingleClassDiagram) => {
        classElement.attributes = classElement.attributes.filter(attr => isValidRow(attr));
        return (classElement.title.length > 0 && classElement.attributes.length > 0 && classElement.color.length > 0);
    }

    const isValidRow = (row: { attribute: string, type: string | undefined}) => {
        return (row.attribute.length > 0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => changeTitle(event)} value={title} type={"input"}/>
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
            <button type={"submit"}>
                submit
            </button>
        </form>
    )
}
