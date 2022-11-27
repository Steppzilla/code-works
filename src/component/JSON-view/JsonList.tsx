import "../Article.css";
import "./JsonView.css";
import {ListData} from "../../model/ListData";

type JsonListParam = {
    val: ListData,
}

export default function JsonList({val}: JsonListParam) {

    return (
        <div className={"box"}>
            <p><span className={"key"}>type:</span> {val.type}</p>
            <p><span className={"key"}>title:</span> {val.title} </p>
            <p><span className={"key"}>sorted:</span> {val.sorted}  </p>
            <p><span className={"key"}>data:</span> {val.paragraphs} </p>
        </div>
    )
}
