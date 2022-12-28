import { ClassDiagramData } from "../../../model/ClassDiagramData";
import TypeAnnotation from "./TypeAnnotation";

type SingleBoxProps = {
    data:{
        color: string,
        diagramTitle: string,
        attributeList: { attributeName: string, attributeType: string | undefined }[]
    }[],
    element: {
        color: string,
        diagramTitle: string,
        attributeList: { attributeName: string, attributeType: string | undefined }[]
    }
}

export default function SingleBox({data, element}: SingleBoxProps) {

    return (
        <div className={"classDiagram"}>
            <h4 style={{color: element.color}}>
                {element.diagramTitle}
            </h4>
            {element.attributeList.map((type,t) =>
                <p key={t}>
                    <span className={"attribute"}> {type.attributeName} </span>
                    :
                    {type.attributeType&&<TypeAnnotation type={type.attributeType} data={data}/>}
                </p>
            )}
        </div>
    )
}
