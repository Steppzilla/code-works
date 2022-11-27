import "../Article.css";
import "./JsonView.css";
import {TextBoxData} from "../../model/TextBoxData";

type JsonTextParam = {
    val: TextBoxData,
}

export default function JsonText({val}: JsonTextParam) {

    return (
        <div className={"box"}>
            <div><span className={"key"}>type:</span> {val.type}</div>
            <div><span className={"key"}>h3:</span> {val.title}</div>
            <div><span className={"key"}>paragraphs:</span> <span
                className={"structure"}>[</span>
                {val.paragraphs.map((par, p) =>
                    <div key={par} className={"box"}>
                        <p><span className={"key"}>{p}:</span> {par}</p>
                    </div>
                )}
                <span className={"structure"}>]</span>
            </div>
        </div>
    )
}
