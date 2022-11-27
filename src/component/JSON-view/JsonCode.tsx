import "../Article.css";
import "../ArticleEditor.css";
import {CodeData} from "../../model/CodeData";

type JsonCodeParam = {
    val: CodeData,
}

export default function JsonText({val}: JsonCodeParam) {

    return (<>
            <p><span className={"key"}>type:</span> {val.type}</p>
            <p><span className={"key"}>title:</span> {val.title} </p>
            <p><span className={"key"}>language:</span> {val.language} </p>
            <p><span className={"key"}>data:</span> {val.data}</p>
        </>
    )
}
