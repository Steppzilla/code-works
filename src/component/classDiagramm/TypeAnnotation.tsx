import {useEffect, useState} from "react";

type TypeAnnotationProps = {
    data: {
        color: string,
        title: string,
        types: { attribute: string, type: string }[]
    }[],
    type: string,
}

export default function TypeAnnotation({data, type}: TypeAnnotationProps) {

    const [usedClass, setUsedClass] = useState<{
        color: string,
        title: string,
        types: { attribute: string, type: string }[]
    }>();

    useEffect(() => {
        const da = data.filter(element => element.title === type);
        if(da.length>0) setUsedClass(da[0]);
    }, [])

    return (
        <span
            className={"type"} style={usedClass? {color:usedClass.color}:{color:"black"}}> {type}
        </span>
    )
}
