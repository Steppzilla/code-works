import "./ClassDiagramm.css";
import SingleBox from "./SingleBox";
import {data} from "../../static/codeStringExamples";

export default function ClassDiagramm() {

    const colorArray: string[] = ["red", "green", "orange", "blue"]

    const newData = data.map((element, i) => {
        return {color: colorArray[i], title: element.title, types: element.types}
    })

    return (
        <div>
            <h2>Klassen-Diagramm</h2>
            {newData.map(element =>
                <SingleBox
                    key={element.title}
                    data={newData}
                    element={element}/>
            )}
        </div>
    )
}
