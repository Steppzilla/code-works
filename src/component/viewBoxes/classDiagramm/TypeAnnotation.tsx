import {useEffect, useState} from "react";
import { ClassDiagramData } from "../../../model/ClassDiagramData";

type TypeAnnotationProps = {
    data: {
        color: string,
        diagramTitle: string,
        attributeList: { attributeName: string, attributeType: string | undefined }[]
    }[],
    type: string,
}

export default function TypeAnnotation({data, type}: TypeAnnotationProps) {

    const [usedClass, setUsedClass] = useState<{
        color: string,
        diagramTitle: string,
        attributeList: { attributeName: string, attributeType: string | undefined }[]
    }>();

    useEffect(() => {
        const da = data.filter(element => element.diagramTitle === type);
        if (da.length > 0) setUsedClass(da[0]);
    }, [])

    return (
        <span
            className={"type"} style={usedClass && {color: usedClass.color} }> {type}
        </span>
    )
}
