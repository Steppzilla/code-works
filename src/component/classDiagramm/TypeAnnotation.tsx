import {useEffect, useState} from "react";

type TypeAnnotationProps = {
    data: {
        color: string,
        title: string,
        types: { attribute: string, type: string | undefined }[]
    }[],
    type: string,
}

export default function TypeAnnotation({data, type}: TypeAnnotationProps) {

    const [usedClass, setUsedClass] = useState<{
        color: string,
        title: string,
        types: { attribute: string, type: string | undefined }[]
    }>();

    useEffect(() => {
        const da = data.filter(element => element.title === type);
        if (da.length > 0) setUsedClass(da[0]);
    }, [])

    return (
        <span
            className={"type"} style={usedClass && {color: usedClass.color} }> {type}
        </span>
    )
}
