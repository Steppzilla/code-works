import "./ClassDiagrammEditor.css";
import SingleBoxEditor from "./SingleBoxEditor";
import {ChangeEvent, MouseEvent, useState} from "react";
import {ClassDiagramData} from "../../../model/ClassDiagramData";
import {article} from "../../../static/codeStringExamples";

type ClassDiagramProps = {
    data: SingleClassDiagram[],
}

type SingleClassDiagram = {
    color: string,
    title: string,
    attributes: { attribute: string, type: string | undefined }[]
}

export default function ClassDiagrammEditor() {
    const diagramData = article.data.find(ele => ele.type === "diagram") as ClassDiagramData;
    const [data, setData] = useState<SingleClassDiagram[]>(diagramData.diagramData)
    const [title, setTitle] = useState<string>("Klassen-Diagramm")

    const handleDiagramCounter = (add: boolean, event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (add) {
            const newObject: SingleClassDiagram = {
                color: "green", title: "klasse", attributes: [
                    {attribute: "", type: ""}
                ]
            }
            setData([...data, newObject]);
        } else if (data) {
            let columnCounter = data.length;
            setData(data.slice(0, columnCounter - 1));
        }
    }

    const changeClassTitle = (index: number, event: ChangeEvent) => {
        event.preventDefault()
        const val = event.target as HTMLFormElement;
        const editClass = data[index];
        editClass.title = val.value;
        const newData: SingleClassDiagram[] = [...data];
        newData[index] = {...editClass};
        setData([...newData]);
    }

    const changeAttribute = (classIndex: number, rowIndex: number, type: boolean, event: ChangeEvent<HTMLInputElement>) => {
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

    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleRows = (index: number, add: boolean, event: MouseEvent) => {
        event.preventDefault();
        if (add) {
            data[index].attributes.push({attribute: "", type: ""});
            setData([...data]);
        } else {
            const attributes = data[index].attributes;
            if (attributes.length > 1) {
                data[index].attributes =  attributes.slice(0, data[index].attributes.length - 1);
                setData([...data]);
            } else if (attributes.length === 1) {
                const editData = data;
                //ganze klasse löschen:
                editData.splice(index,1);
                setData([...editData])
            }
        }
    }

    const setColor = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        data[index].color=event.target.value;
        setData([...data])
    }

    return (
        <form>
            <input onChange={(event) => changeTitle(event)} value={title} type={"input"}/>
            <div id={"classDiagramEditor"}>
                Listenelemente hinzufügen / löschen: &nbsp;
                <button onClick={(event) => handleDiagramCounter(false, event)}>-</button>
                <button onClick={(event) => handleDiagramCounter(true, event)}>+</button>

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
        </form>
    )
}
