import TypeAnnotationEditor from "./TypeAnnotationEditor";
import { ChangeEvent, MouseEvent } from "react";

type SingleBoxProps = {
    data: {
        color: string,
        diagramTitle: string,
        attributeList: { attributeName: string, attributeType: string | undefined }[]
    }[],
    element: {
        color: string,
        diagramTitle: string,
        attributeList: { attributeName: string, attributeType: string | undefined }[]
    },
    changeAttribute: (classIndex: number, rowIndex: number, type: boolean, event: ChangeEvent<HTMLInputElement>) => void,
    index: number,
    changeTitle: (index: number, event: ChangeEvent) => void,
    handleRows: (index: number, add: boolean, event: MouseEvent) => void,
    setColor: (index: number, event: ChangeEvent<HTMLInputElement>) => void,
}

export default function SingleBoxEditor({
    element,
    data,
    changeAttribute,
    index,
    changeTitle,
    handleRows,
    setColor,
}: SingleBoxProps) {

    return (
        <div className={"classDiagram"} style={{ boxShadow: "0 0 2px 2px " + element.color }}>
            <button onClick={(event) => handleRows(index, false, event)}>-</button>
            <button onClick={(event) => handleRows(index, true, event)}>+</button>
            <input value={element.color} onChange={(event) => setColor(index, event)} />
            <h4>
                <input style={{ color: element.color }}
                    value={element.diagramTitle}
                    onChange={(event) => changeTitle(index, event)} />
            </h4>
            {element.attributeList.map((type, t) =>
                <p key={t}>
                    <input className={"attribute"} value={type.attributeName} onChange={
                        (event) => changeAttribute(index, t, false, event)}
                    />
                    :

                    <TypeAnnotationEditor type={type.attributeType} data={data} changeAttribute={changeAttribute}
                        index={index} attributeIndex={t} />
                </p>
            )}<p key={"x"}>
            </p>
        </div>
    )
}
