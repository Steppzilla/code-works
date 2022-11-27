import "../Article.css";
import "../ArticleEditor.css";
import {TextBoxData} from "../../model/TextBoxData";

type JsonTextParam = {
    val: TextBoxData,
}

export default function JsonText({val}: JsonTextParam) {

    return (
        <div>
            <p><span className={"key"}>type:</span> {val.type}</p>
            <p><span className={"key"}>h3:</span> {val.title}</p>
            <p><span className={"key"}>paragraphs:</span> <span
                className={"structure"}>[</span>
                {val.paragraphs.map((par, p) =>
                    <div>
                        <p><span className={"key"}>{p}:</span> {par}</p>
                    </div>
                )}
                <span className={"structure"}>]</span>
            </p>
        </div>
    )
}
