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
                <div key={eleI} className={"data-prefix"} data-content={key + ":"}>
                    &nbsp;
                    {(typeof Object.values(val)[eleI] === "string") && <>{Object.values(val)[eleI]}</>}
                    {(typeof Object.values(val)[eleI] === "boolean") && <>
                        {val.sorted ? "true" : "false"}
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
                            {val.diagramData.map((ele, e) =>
                                <div key={e} className={"box data-prefix"} data-content={e + ":"}>
                                    &nbsp;<span className={"structure"}>&#123;</span>
                                    <div className={"box"}>
                                        <div className={"data-prefix"} data-content={"title:"}> {ele.title}</div>
                                        <div className={"data-prefix"} data-content={"color:"}> {ele.color}</div>
                                        <div className={"data-prefix"} data-content={"types:"}>
                                            <ObjectArray objects={ele.attributes}/>
                                        </div>
                                    </div>
                                    <span className={"structure"}>&#125;</span>
                                </div>
                            )}
                            <span className={"structure"}>]</span>
                        </>
                    }
                </div>
            )}
        </div>
    )
}
