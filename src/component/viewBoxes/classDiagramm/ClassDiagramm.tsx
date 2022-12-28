import { ClassDiagramData } from "../../../model/ClassDiagramData";
import "./ClassDiagramm.css";
import SingleBox from "./SingleBox";

type ClassDiagramProps = {
    title: string,
    data: {
        color: string,
        diagramTitle: string,
        attributeList: { attributeName: string, attributeType: string | undefined }[]
    }[]
}

   
export default function ClassDiagramm({data, title}: ClassDiagramProps) {

    return (
        <>
            <h3>{title}</h3>
            <div className={"diagramBox"} >
                {data.map((element,e) =>
                    <SingleBox
                        key={e}
                        data={data}
                        element={element}/>
                )}
            </div>
        </>
    )
}
