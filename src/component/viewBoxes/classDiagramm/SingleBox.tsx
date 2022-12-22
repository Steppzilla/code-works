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
        <div className={"classDiagram"} style={{boxShadow: "10px 10px 20px #1e212b, -10px -10px 20px #3a3f53"}}>
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
