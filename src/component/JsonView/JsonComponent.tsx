import "../Article.css";
import "./JsonView.css";
import {ComponentDataXXL} from "../../model/ComponentData";
import ObjectArray from "./ObjectArray";
import StringArray from "./StringArray";

type JsonCodeParam = {
    val: ComponentDataXXL,
}

export default function JsonText({val}: JsonCodeParam) {

    return (
        <div className={"box"}>
            {Object.keys(val).map((key, eleI) =>
                <div key={eleI}>
                    <span className={"key"}>"{key}":</span>
                    &nbsp;
                    <span className={"content"}>
                    {(typeof Object.values(val)[eleI] === "string") &&
                        <>
                            "{Object.values(val)[eleI]}"
                            <span className={"structure"}>,</span>
                        </>}
                        {(typeof Object.values(val)[eleI] === "boolean") &&
                            <>
                            <span className={"boolean content"}> {val.sorted ? "true" : "false"}
                                <span className={"structure"}>,</span></span>
                            </>}
                        {(key === "rows")
                            ? <ObjectArray objects={val.rows}/> : ""
                        }
                        {(key === "paragraphs" || key === "titles")
                            && <StringArray strings={key === "titles" ? val.titles : val.paragraphs}/>
                        }
                        {(val.diagramData && Object.keys(val)[eleI] === "diagramData") &&
                            <>
                                <span className={"structure"}>[</span>
                                <div className={"box"}>
                                    {val.diagramData.map((ele, e) =>
                                        <div key={e}>
                                            <span className={"notJsonPrefix"}>{e + ":"}</span>
                                            &nbsp;<span className={"structure"}>&#123;</span>
                                            <div className={"box"}>
                                                <div><span className={"key"}>"title":</span>"{ele.title}"
                                                    <span className={"structure"}>,</span></div>
                                                <div><span className={"key"}>"color":</span>"{ele.color}"
                                                    {(val && val.diagramData && (e < val.diagramData.length - 1)) &&
                                                        <span className={"structure"}>,</span>
                                                    }
                                                </div>
                                                <div>
                                                    <span className={"key"}>"types":</span>
                                                    &nbsp;
                                                    <ObjectArray objects={ele.attributes}/>
                                                </div>
                                            </div>
                                            <span className={"structure"}>&#125;</span>
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
    )
}
