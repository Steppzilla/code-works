import {useState} from "react";
import "../Article.css";
import {article} from "../../static/codeStringExamples";
import {ArticleData} from "../../model/ArticleData";
import "./JsonView.css";
import JsonText from "./JsonText";
import JsonCode from "./JsonCode";
import JsonList from "./JsonList";
import JsonTabular from "./JsonTabular";
import JsonDiagram from "./JsonDiagram";

export default function JSONView() {

    const [article2, setArticle2] = useState<ArticleData>(article);
    const showTable: boolean = true;
    const showText: boolean = true;
    const showCode: boolean = true;
    const showList: boolean = true;
    const showDiagram: boolean = true;

    return (
        <div id={"AE"}>
            <h1> JSON - Ansicht: </h1>
            <span className={"structure"}>&#123;</span>
            <div>
                <p><span className={"key"}>h1:</span> {article2.h1}</p>
                <p><span className={"key"}>h2:</span> {article2.h2}</p>
                <span className={"key"}>data:</span>&nbsp;<span className={"structure"}>[</span>
                {article2.data.map((val, valI) =>
                    <div className={"box"}>
                        <span className={"key"}>{valI}:</span> <span className={"structure"}>&#123;</span>
                        {(val.type === "text") &&
                            (showText ? <JsonText val={val}/> : "Text")
                        }
                        {(val.type === "code") &&
                            (showCode ? <JsonCode val={val}/> : "Code")
                        }
                        {(val.type === "list") &&
                            (showList ? <JsonList val={val}/> : "Liste")
                        }
                        {(val.type === "table") &&
                            (showTable ? <JsonTabular val={val}/> : "Tabelle")
                        }
                        {(val.type === "diagram") &&
                            (showDiagram ? <JsonDiagram val={val}/> : "Diagramm")
                        }
                        <span className={"structure"}>&#125;</span>
                    </div>
                )}
                <span className={"structure"}>]</span>
            </div>
            <span className={"structure"}>&#125;</span>
        </div>
    )
}
