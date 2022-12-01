import "./ClassDiagramm.css";
import SingleBox from "./SingleBox";

type ClassDiagramProps = {
    title: string,
    data: {
        color: string,
        title: string,
        attributes: { attribute: string, type: string | undefined }[]
    }[],
}

export default function ClassDiagramm({data, title}: ClassDiagramProps) {

    return (
        <>
            <h3>{title}</h3>
            <div className={"diagramBox"} >
                {data.map(element =>
                    <SingleBox
                        key={element.title}
                        data={data}
                        element={element}/>
                )}
            </div>
        </>
    )
}
