import "../Article.css";
import {ArticleData} from "../../model/ArticleData";
import "./JsonView.css";
import JsonComponent from "./JsonComponent";
import {isCodeType, isDiagramType, isListType, isTableType, isTextType} from "../../model/ComponentData";
import DateComp from "./DateComp";
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
            <h1> JSON - Ansicht: </h1>
            <span className={"structure"}>&#123;</span>
            <div className={"box"}>
                {Object.keys(article).map((articleAttribute, artI) =>
                    <div key={artI}>
                        <div className={"data-prefix"} data-content={articleAttribute + ":"}>
                            &nbsp;
                            {(articleAttribute === "date") &&
                                <DateComp date={article.date}/>
                            }
                            {(articleAttribute === "collections") &&
                                <StringArray strings={article.collections}/>
                            }
                            {(typeof Object.values(article)[artI] === "string") &&
                                <>{Object.values(article)[artI]}</>
                            }
                            {(
                                    !(typeof Object.values(article)[artI] === "string")
                                    && !(articleAttribute === "collections")
                                    && !(articleAttribute === "date")
                                ) &&
                                <>  <span className={"structure"}>[</span>
                                    {article.data.map((val, valI) =>
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
                    </div>
                )}
            </div>
            <span className={"structure"}>&#125;</span>
        </div>
    )
}
