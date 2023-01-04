import "../Article.css";
import "./JsonView.css";
import {ComponentData, isCodeType, isDiagramType, isListType, isTableType} from "../../model/ComponentData";
import ObjectArray from "./ObjectArray";
import StringArray from "./StringArray";

type JsonCodeParam = {
    val: ComponentData,
}

export default function JsonText({val}: JsonCodeParam) {

    return (
        <div className={"box"}>
            {Object.keys(val).map((key, eleI) =>
                <div key={eleI}>
                    <span className={"key"}>"{key}":</span>
                    &nbsp;
                    <span>
                                {
                                    (Object.values(val)[eleI])==null && <span className={"empty content"}>null</span>
                                }
                        {
                            (key==="sortedList"&&!isListType(val) &&!isCodeType(val))&& <span className={"empty content"}>{Object.values(val)[eleI]?.toString()}</span>
                        }
                        {
                            (Object.values(val)[eleI] && Object.values(val)[eleI].length === 0) &&
                            <span className={"empty content"}>[]</span>
                        }
                        {
                            (typeof Object.values(val)[eleI] === "string") &&
                            <>
                                "{Object.values(val)[eleI]}"
                                <span className={"structure"}>,</span>
                            </>
                        }
                        {
                            (typeof Object.values(val)[eleI] === "number") &&
                            <>
                                {Object.values(val)[eleI]}
                                <span className={"structure"}>,</span>
                            </>
                        }
                        {
                            (typeof Object.values(val)[eleI] === "boolean" && (isListType(val) || isCodeType(val))) &&
                            <>
                            <span className={"boolean content"}> {val.sortedList ? "true" : "false"}
                                <span className={"structure"}>,</span></span>
                            </>
                        }
                        {(key === "tableRows" && isTableType(val))
                            ? <ObjectArray objects={val.tableRows}/> : ""
                        }
                        {((key === "paragraphs"&& isListType(val)) || (key === "tableTitles"&&isTableType(val)))
                            && <StringArray strings={(isTableType(val)) ? val.tableTitles : val.paragraphs}/>
                        }

                        {(isDiagramType(val) && val.diagramData && Object.keys(val)[eleI] === "diagramData") &&
                            <>
                                <span className={"structure"}>[</span>
                                <div className={"box"}>
                                    {val.diagramData.map((ele, e) =>
                                        <div key={e}>
                                            <span className={"notJsonPrefix"}>{e + ":"}</span>
                                            &nbsp;<span className={"structure"}>&#123;</span>
                                            <div className={"box"}>
                                                <div><span className={"key"}>"title":</span>"{ele.diagramTitle}"
                                                    <span className={"structure"}>,</span></div>
                                                <div><span className={"key"}>"color":</span>"{ele.color}"
                                                    {(val && val.diagramData && (e < val.diagramData.length - 1)) &&
                                                        <span className={"structure"}>,</span>
                                                    }
                                                </div>
                                                <div>
                                                    <span className={"key"}>"types":</span>
                                                    &nbsp;
                                                    <ObjectArray objects={ele.attributeList}/>
                                                </div>
                                            </div>
                                            <span className={"structure"}>&#125;</span>
                                        </div>
                                    )}
                                </div>
                                <span className={"structure"}>]</span>
                            </>
                        }
                    </span></div>
            )}
        </div>
    )
}
