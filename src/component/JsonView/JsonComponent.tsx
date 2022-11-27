import "../Article.css";
import "./JsonView.css";
import {ComponentDataXXL} from "../../model/ComponentData";

type JsonCodeParam = {
    val: ComponentDataXXL,
}

export default function JsonText({val}: JsonCodeParam) {

    return (
        <div className={"box"}>
            <div className={"data-prefix"} data-content={"type:"}> {val.type}</div>
            {val.title && <div className={"data-prefix"} data-content={"title:"}> {val.title} </div>}
            {val.titles && <div className={"data-prefix"} data-content={"titles:"}> {val.titles}</div>}
            {val.language && <div className={"data-prefix"} data-content={"language:"}> {val.language} </div>}
            {val.data && <div className={"data-prefix"} data-content={"data:"}> {val.data}</div>}
            {val.sorted && <div className={"data-prefix"} data-content={"sorted:"}> {val.sorted}  </div>}
            {val.paragraphs && <div className={"data-prefix"} data-content={"paragraphs:"}> {val.paragraphs} </div>}
            {val.columns && <div className={"data-prefix"} data-content={"rows:"}><span className={"structure"}>[</span>
                {
                    val.columns.map((column, c) =>
                        <div key={crypto.randomUUID()} className={"box"}>
                            <div className={"data-prefix"} data-content={c + ":"}>&nbsp;
                                <span className={"structure"}>&#123;</span>
                                <div className={"box"}>
                                    {Object.keys(column).map((cell, cI) =>
                                        <div key={cell + cI} className={"data-prefix"} data-content={cell + ":"}>
                                            <span> {Object.values(column)[cI]}</span>
                                        </div>
                                    )}
                                </div>
                                <span className={"structure"}>&#125;</span>
                            </div>
                        </div>
                    )}
                <span className={"structure"}>]</span>
            </div>
            }
            {val.paragraphs && <div className={"data-prefix"} data-content={"paragraphs:"}> <span
                className={"structure"}>[</span>
                {val.paragraphs.map((par, p) =>
                    <div key={par} className={"box"}>
                        <div className={"data-prefix"} data-content={p + ":"}> &nbsp;{par}</div>
                    </div>
                )}
                <span className={"structure"}>]</span>
            </div>
            }

            {val.diagramData &&
                <div className={"data-prefix"} data-content={"diagramData:"}><span className={"structure"}>[</span>
                    {val.diagramData.map((ele, e) => {
                        return (<div key={ele.color + e} className={"box data-prefix"} data-content={e + ":"}>
                                &nbsp;<span className={"structure"}>&#123;</span>
                                <div className={"box"}>
                                    <div className={"data-prefix"} data-content={"title:"}> {ele.title}</div>
                                    <div className={"data-prefix"} data-content={"color:"}> {ele.color}</div>
                                    <div className={"data-prefix"} data-content={"types:"}> <span
                                        className={"structure"}>[</span>
                                        {ele.attributes.map((el, eleI) => {
                                                return (<div key={el.attribute + eleI} className={"box data-prefix"}
                                                             data-content={eleI + ":"}>
                                                    &nbsp;
                                                    <span className={"structure"}>&#123;</span>
                                                    <div className={"box"}>
                                                        <div className={"data-prefix"}
                                                             data-content={"attribute:"}> {el.attribute}</div>
                                                        <div className={"data-prefix"} data-content={"type:"}> {el.type}
                                                        </div>
                                                    </div>
                                                    <span className={"structure"}>&#125;</span>
                                                </div>)
                                            }
                                        )}
                                        <span className={"structure"}>]</span>
                                    </div>
                                </div>
                                <span className={"structure"}>&#125;</span>
                            </div>
                        )
                    })}
                    <span className={"structure"}>]</span>
                </div>
            }
        </div>
    )
}
