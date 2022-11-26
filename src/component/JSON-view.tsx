import {useState} from "react";
import "./Article.css";
import {article} from "../static/codeStringExamples";
import {ArticleData} from "../model/ArticleData";
import "./ArticleEditor.css";

export default function JSONView() {

    const [article2, setArticle2] = useState<ArticleData>(article);

    return (
        <div id={"AE"}>
            <h1> JSON - Ansicht:</h1>
            <span className={"structure"}>&#123;</span>
            <div>
                <p><span className={"key"}>h1:</span> <input value={article2.h1}/></p>
                <p><span className={"key"}>h2:</span> {article2.h2}</p>
                <span className={"key"}>data:</span>&nbsp;<span className={"structure"}>[</span>
                {article2.data.map((val, valI) =>
                    <div className={"box"}>
                        <span className={"key"}>{valI}:</span> <span className={"structure"}>&#123;</span>
                        {(val.type === "text") &&
                            <>
                                <div>
                                    <p><span className={"key"}>type:</span> {val.type}</p>
                                    <p><span className={"key"}>h3:</span> {val.title}</p>
                                    <p><span className={"key"}>paragraphs:</span> <span className={"structure"}>[</span>
                                        {val.paragraphs.map((par, p) =>
                                            <div>
                                                <p><span className={"key"}>{p}:</span> {par}</p>
                                            </div>
                                        )}
                                        <span className={"structure"}>]</span>
                                    </p>
                                </div>
                            </>
                        }
                        {(val.type === "code") &&
                            <>
                                <p><span className={"key"}>type:</span> {val.type}</p>
                                <p><span className={"key"}>title:</span> {val.title} </p>
                                <p><span className={"key"}>language:</span> {val.language} </p>
                                <p><span className={"key"}>data:</span> {val.data}</p>
                            </>
                        }
                        {(val.type === "list") &&
                            <div className={"box"}>
                                <p><span className={"key"}>type:</span> {val.type}</p>
                                <p><span className={"key"}>title:</span> {val.title} </p>
                                <p><span className={"key"}>sorted:</span> {val.sorted}  </p>
                                <p><span className={"key"}>data:</span> {val.paragraphs} </p>
                            </div>
                        }
                        {(val.type === "table") &&
                            <div className={"box"}>
                                <p><span className={"key"}>type:</span> {val.type}</p>
                                <p><span className={"key"}>title:</span> {val.title ? val.title : ""}</p>
                                <p><span className={"key"}>titles:</span> {val.titles}</p>
                                <p><span className={"key"}>rows:</span> <span className={"structure"}>[</span>
                                    {
                                        val.columns.map((column, c) =>
                                            <div>
                                                <p><span className={"key"}>{c}:</span> &nbsp;
                                                    <span className={"structure"}>&#123;</span>
                                                    <div>
                                                        {Object.keys(column).map((cell, cI) => <p>
                                                                <span className={"key"}>{cell}:</span>
                                                                <span> {Object.values(column)[cI]}</span>
                                                            </p>
                                                        )}
                                                    </div>
                                                    <span className={"structure"}>&#125;</span>
                                                </p>
                                            </div>
                                        )}
                                    <span className={"structure"}>]</span>
                                </p>
                            </div>
                        }
                        {(val.type === "diagram") && (<div className={"box"}>
                                <p><span className={"key"}>type:</span> {val.type}</p>
                                <p><span className={"key"}>data:</span> <span className={"structure"}>[</span>
                                    {val.diagramData.map((ele, e) => {
                                        return (<div><span className={"key"}>{e}:</span>
                                                &nbsp;<span className={"structure"}>&#123;</span>
                                                <div>
                                                    <p><span className={"key"}>title:</span> {ele.title}</p>
                                                    <p><span className={"key"}>color:</span> {ele.color}</p>
                                                    <p><span className={"key"}>types:</span> <span
                                                        className={"structure"}>[</span>
                                                        {ele.types.map((ele, eleI) => {
                                                                return (<div>
                                                                    <span className={"key"}>{eleI}</span>&nbsp;
                                                                    <span className={"structure"}>&#123;</span>
                                                                    <div>
                                                                        <p><span
                                                                            className={"key"}>attribute:</span> {ele.attribute}
                                                                        </p>
                                                                        <p><span className={"key"}>type:</span> {ele.type}
                                                                        </p>
                                                                    </div>
                                                                    <span className={"structure"}>&#125;</span>
                                                                </div>)
                                                            }
                                                        )}
                                                        <span className={"structure"}>]</span>
                                                    </p>
                                                </div>
                                                <span className={"structure"}>&#125;</span>
                                            </div>
                                        )
                                    })}
                                    <span className={"structure"}>]</span>
                                </p>

                            </div>
                        )
                        }
                        <span className={"structure"}>&#125;</span>
                    </div>
                )
                }
                )
                <span className={"structure"}>]</span>
            </div>
            <span className={"structure"}>&#125;</span>
        </div>
    )
}
