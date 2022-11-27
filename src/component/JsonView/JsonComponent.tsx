import "../Article.css";
import "./JsonView.css";
import {ComponentDataXXL} from "../../model/ComponentData";
import StringArray from "./StringArray";
import ObjectArray from "./ObjectArray";

type JsonCodeParam = {
    val: ComponentDataXXL,
}

export default function JsonText({val}: JsonCodeParam) {

    return (
        <div className={"box"}>
            {Object.keys(val).map((ele, eleIndex) =>
                <div key={eleIndex} className={"data-prefix"} data-content={ele + ":"}>
                    &nbsp;
                    {(ele === "title" || ele === "type"
                        || ele === "language" || ele === "data"

                    ) && val[ele]}
                    {ele === "sorted" && <>
                        {val.sorted ? "true" : "false"}
                    </>}
                    {(val.titles && ele === "titles") &&
                        <StringArray strings={val.titles}/>
                    }
                    {(val.paragraphs && ele === "paragraphs") &&
                        <StringArray strings={val.paragraphs}/>
                    }
                    {(val.rows && ele === "rows") && <>
                        <ObjectArray objects={val.rows}/>
                    </>}
                    {(val.diagramData && ele === "diagramData") &&
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
