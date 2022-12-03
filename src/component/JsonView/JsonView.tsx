import "../Article.css";
import {ArticleData} from "../../model/ArticleData";
import "./JsonView.css";
import JsonComponent from "./JsonComponent";
import {isCodeType, isDiagramType, isListType, isTableType, isTextType} from "../../model/ComponentData";
import StringArray from "./StringArray";

type JsonViewProps = {
    article: ArticleData,
}

export default function JsonView({article}: JsonViewProps) {

    const showTable: boolean = true;
    const showText: boolean = true;
    const showCode: boolean = true;
    const showList: boolean = true;
    const showDiagram: boolean = true;

    return (
        <div id={"AE"}>
            <h2> JSON - Ansicht: </h2>

            <div className={"box"}>
            <span className={"structure"}>&#123;</span>
            <div className={"box"}>
                {Object.keys(article).map((articleAttribute, artI) =>
                    <div key={artI}>
                        <span className={"key"}>"{articleAttribute}":</span>
                        &nbsp;
                        <span className={"content date"}>
                        {(articleAttribute === "date") && <>
                            "{(article.date).toISOString()}"
                            <span className={"structure"}>,</span>
                        </>
                        }
                            {(articleAttribute === "collections") &&
                                <><StringArray strings={article.collections}/>
                                    <span className={"structure"}>,</span>
                                </>
                            }
                            {(typeof Object.values(article)[artI] === "string") &&
                                <>"{Object.values(article)[artI]}"<span className={"structure"}>,</span></>
                            }
                            {(
                                    !(typeof Object.values(article)[artI] === "string")
                                    && !(articleAttribute === "collections")
                                    && !(articleAttribute === "date")
                                ) &&
                                <>  <span className={"structure"}>[</span>
                                    <div className={"box"}>
                                        {article.data.map((val, valI) =>
                                            <div key={valI} className={"notJsonPrefix"} data-content={valI + ":"}>
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
                                                {valI < article.data.length - 1 &&
                                                    <span className={"structure"}>,</span>}
                                            </div>
                                        )}
                                    </div>
                                    <span className={"structure"}>]</span>
                                </>
                            }
                        </span>
                    </div>
                )}
            </div>
            <span className={"structure"}>&#125;</span>
            </div>
        </div>
    )
}
