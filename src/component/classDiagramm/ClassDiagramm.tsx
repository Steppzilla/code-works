import "./ClassDiagramm.css";
import SingleBox from "./SingleBox";

type ClassDiagramProps={
    data: {
        color: string,
        title: string,
        types: { attribute: string, type: string | undefined }[]
    }[],
}

export default function ClassDiagramm(diagramData: ClassDiagramProps) {

    return (
        <div>
            <h3>Klassen-Diagramm</h3>
            {diagramData.data.map(element =>
                <SingleBox
                    key={element.title}
                    data={diagramData.data}
                    element={element}/>
            )}
        </div>
    )
}
