import "../Article.css";
import { ArticleData } from "../../model/ArticleData";
import "./JsonView.css";
import JsonComponent from "./JsonComponent";
import { isCodeType, isDiagramType, isListType, isTableType, isTextType } from "../../model/ComponentData";
import StringArray from "./StringArray";
import { MouseEventHandler, useState } from "react";
import { jSonFromArticleData } from "../../static/articleIndexing";
import copyImg from "../../icons/copy.png";

type JsonViewProps = {
    article: ArticleData,
}

export default function JsonView({ article }: JsonViewProps) {

    const showTable: boolean = true;
    const showText: boolean = true;
    const showCode: boolean = true;
    const showList: boolean = true;
    const showDiagram: boolean = true;

    const [selected, setSelected] = useState<boolean>(false);

    const copyText: MouseEventHandler<HTMLButtonElement> = (event) => {
        navigator.clipboard.writeText(jSonFromArticleData(article).toString());
    }

    return (
        <div id={"AE"} aria-selected={selected}>
            <h2> JSON - Ansicht:  <button className="saveJsonButton" onClick={copyText}><img src={copyImg} alt="copy" /></button></h2>
            <div className={"box"}>
                <span className={"structure"}>&#123;</span>
                <div className={"box"}>
                    {Object.keys(article).map((articleAttribute, artI) =>
                        <div key={artI}>
                            <span className={"key"}>"{articleAttribute}":</span>
                            &nbsp;
                            <span className={"content date"}>
                                {(articleAttribute === "date") && <>
                                    "{(article.date)?.toISOString()}"
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
                                            {article.dataBlock.map((val, valI) =>
                                                <div key={valI} className={"notJsonPrefix"} data-content={valI + ":"}>
                                                    &nbsp;<span className={"structure"}>&#123;</span>
                                                    {
                                                      // (
                                                      //     (showTable && isTableType(val)) || (showText && isTextType(val))
                                                      //     || (showCode && isCodeType(val)) || (showList && isListType(val))
                                                      //     || (showDiagram && isDiagramType(val))) ?
                                                      //     <JsonComponent val={val} />
                                                      //     :
                                                      //     "Object"
                                                    }
                                                    <span className={"structure"}>&#125;</span>
                                                    {valI < article.dataBlock.length - 1 &&
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
