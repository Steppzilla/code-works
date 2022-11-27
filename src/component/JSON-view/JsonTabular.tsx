import "../Article.css";
import "../ArticleEditor.css";
import {TableData} from "../../model/TableData";

type JsonTabularParam = {
    val: TableData,
}

export default function JsonTabular({val}: JsonTabularParam) {

    return (
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
    )
}
