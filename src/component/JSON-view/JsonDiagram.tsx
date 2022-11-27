import "../Article.css";
import "./JsonView.css";
import {ClassDiagramData} from "../../model/ClassDiagramData";

type JsonDiagramParam = {
    val: ClassDiagramData,
}

export default function JsonDiagram({val}: JsonDiagramParam) {

    return (
        <div className={"box"}>
            <div><span className={"key"}>type:</span> {val.type}</div>
            <div><span className={"key"}>data:</span> <span className={"structure"}>[</span>
                {val.diagramData.map((ele, e) => {
                    return (<div key={ele.color+e} className={"box"}><span className={"key"}>{e}:</span>
                            &nbsp;<span className={"structure"}>&#123;</span>
                            <div className={"box"}>
                                <div><span className={"key"}>title:</span> {ele.title}</div>
                                <div><span className={"key"}>color:</span> {ele.color}</div>
                                <div><span className={"key"}>types:</span> <span
                                    className={"structure"}>[</span>
                                    {ele.attributes.map((el, eleI) => {
                                            return (<div key={el.attribute + eleI} className={"box"}>
                                                <span className={"key"}>{eleI}</span>&nbsp;
                                                <span className={"structure"}>&#123;</span>
                                                <div className={"box"}>
                                                    <div><span
                                                        className={"key"}>attribute:</span> {el.attribute}
                                                    </div>
                                                    <div><span className={"key"}>type:</span> {el.type}
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
        </div>
    )
}
