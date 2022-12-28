import { ChangeEvent, useEffect, useState } from "react";

type TypeAnnotationProps = {
    data: {
        color: string,
        diagramTitle: string,
        attributeList: { attributeName: string, attributeType: string | undefined }[]
    }[],
    type: string | undefined,
    changeAttribute: (classIndex: number, rowIndex: number, type: boolean, event: ChangeEvent<HTMLInputElement>) => void,
    index: number,
    attributeIndex: number,
}

export default function TypeAnnotationEditor({
    data,
    type,
    changeAttribute,
    index,
    attributeIndex
}: TypeAnnotationProps) {

    const [usedClass, setUsedClass] = useState<{
        color: string,
        diagramTitle: string,
        attributeList: { attributeName: string, attributeType: string | undefined }[]
    }>();

    useEffect(() => {
        const da = data.filter(element => {
            const titleLength = element.diagramTitle.length;
            if (element.diagramTitle === type?.slice(0, titleLength))
                return true;
            return false;
        });
        if (da.length > 0) setUsedClass(da[0]);
        if (da.length === 0) setUsedClass(undefined)
    }, [data, type])

    return (
        <input
            onChange={(event) => changeAttribute(index, attributeIndex, true, event)}
            className={"type"} style={usedClass && { color: usedClass.color }} value={type} type={"input"}>
        </input>
    )
}
