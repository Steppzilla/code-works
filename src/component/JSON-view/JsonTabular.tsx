import "../Article.css";
import "./JsonView.css";
import {TableData} from "../../model/TableData";

type JsonTabularParam = {
    val: TableData,
}

export default function JsonTabular({val}: JsonTabularParam) {

    return (
        <div className={"box"}>
            <div><span className={"key"}>type:</span> {val.type}</div>
            <div><span className={"key"}>title:</span> {val.title ? val.title : ""}</div>
            <div><span className={"key"}>titles:</span> {val.titles}</div>
            <div><span className={"key"}>rows:</span> <span className={"structure"}>[</span>
                {
                    val.columns.map((column, c) =>
                        <div key={crypto.randomUUID()} className={"box"}>
                            <div><span className={"key"}>{c}:</span> &nbsp;
                                <span className={"structure"}>&#123;</span>
                                <div className={"box"}>
                                    {Object.keys(column).map((cell, cI) => <div key={cell+cI}>
                                            <span className={"key"}>{cell}:</span>
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
        </div>
    )
}
