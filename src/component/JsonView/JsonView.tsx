import {useState} from "react";
import "../Article.css";
import {article} from "../../static/codeStringExamples";
import {ArticleData} from "../../model/ArticleData";
import "./JsonView.css";
import JsonComponent from "./JsonComponent";
import {isCodeType, isDiagramType, isListType, isTableType, isTextType} from "../../model/ComponentData";

export default function JsonView() {

    const [article2, setArticle2] = useState<ArticleData>(article);
    const showTable: boolean = false;
    const showText: boolean = false;
    const showCode: boolean = true;
    const showList: boolean = false;
    const showDiagram: boolean = false;

    return (
        <div id={"AE"}>
            <h1> JSON - Ansicht: </h1>
            <span className={"structure"}>&#123;</span>
            <div className={"box"}>
                <div className={"data-prefix"} data-content={"h1:"}> {article2.h1}</div>
                <div className={"data-prefix"} data-content={"h2:"}> {article2.h2}</div>
                <div className={"data-prefix"} data-content={"data:"}>
                    &nbsp; <span className={"structure"}>[</span>
                    {article2.data.map((val, valI) =>
                        <div key={val.type + valI} className={"box data-prefix"} data-content={valI + ":"}>
                            &nbsp;<span className={"structure"}>&#123;</span>
                            {
                                (
                                    (showTable && isTableType(val)) || (showText && isTextType(val))
                                    || (showCode && isCodeType(val)) || (showList && isListType(val))
                                    || (showDiagram && isDiagramType(val))) ?
                                    <JsonComponent val={val}/>
                                    :
                                    "Object"
                            }
                            <span className={"structure"}>&#125;</span>
                        </div>
                    )}
                    <span className={"structure"}>]</span>
                </div>
            </div>
            <span className={"structure"}>&#125;</span>
        </div>
    )
}
