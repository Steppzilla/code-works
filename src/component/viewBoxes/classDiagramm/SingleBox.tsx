import TypeAnnotation from "./TypeAnnotation";

type SingleBoxProps = {
    data: {
        color: string,
        title: string,
        attributes: { attribute: string, type: string|undefined }[]
    }[],
    element: {
        color: string,
        title: string,
        attributes: { attribute: string, type: string|undefined }[]
    }
}

export default function SingleBox({data, element}: SingleBoxProps) {

    return (
        <div className={"classDiagram"}>
            <h4 style={{color: element.color}}>
                {element.title}
            </h4>
            {element.attributes.map((type,t) =>
                <p key={t}>
                    <span className={"attribute"}> {type.attribute} </span>
                    :
                    {type.type&&<TypeAnnotation type={type.type} data={data}/>}
                </p>
            )}
        </div>
    )
}
