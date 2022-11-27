import "../Article.css";
import "./JsonView.css";
import {ClassDiagramData} from "../../model/ClassDiagramData";

type JsonDiagramParam = {
    val: ClassDiagramData,
}

export default function JsonDiagram({val}: JsonDiagramParam) {

    return (
        <div className={"box"}>
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
