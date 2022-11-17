import TypeAnnotation from "./TypeAnnotation";

type SingleBoxProps = {
    data: {
        color: string,
        title: string,
        types: { attribute: string, type: string|undefined }[]
    }[],
    element: {
        color: string,
        title: string,
        types: { attribute: string, type: string|undefined }[]
    }
}

export default function SingleBox({data, element}: SingleBoxProps) {

    return (
        <div className={"classDiagram"}>
            <h3 style={{color: element.color}}>
                {element.title}
            </h3>
            {element.types.map(type =>
                <p key={type.attribute}>
                    <span className={"attribute"}> {type.attribute} </span>
                    :
                    {type.type&&<TypeAnnotation type={type.type} data={data}/>}
                </p>
            )}
        </div>
    )
}
