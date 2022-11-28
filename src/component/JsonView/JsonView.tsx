import {useState} from "react";
import "../Article.css";
import {article} from "../../static/codeStringExamples";
import {ArticleData} from "../../model/ArticleData";
import "./JsonView.css";
import JsonComponent from "./JsonComponent";
import {isCodeType, isDiagramType, isListType, isTableType, isTextType} from "../../model/ComponentData";

export default function JsonView() {

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
            <div className={"box"}>
                {Object.keys(article2).map((articleAttribute, artI) =>
                    <>
                        <div className={"data-prefix"} data-content={articleAttribute + ":"}>
                            {(typeof Object.values(article2)[artI] === "string") ?
                                <>&nbsp;{Object.values(article2)[artI]}</>
                                :
                                <> &nbsp; <span className={"structure"}>[</span>
                                    {article2.data.map((val, valI) =>
                                        <div key={valI} className={"box data-prefix"} data-content={valI + ":"}>
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
                                </>
                            }
                        </div>
                    </>
                )}
            </div>
            <span className={"structure"}>&#125;</span>
        </div>
    )
}
