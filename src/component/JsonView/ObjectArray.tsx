import "../Article.css";
import "./JsonView.css";

type ObjectArrayParams = {
    objects: object[]|undefined,
}

export default function ObjectArray({objects}: ObjectArrayParams) {

    return (
        <>
            <span  className={"structure"}>[</span>
            <div className={"box"}>
            {objects?.map((el, eleI) =>
                <div key={eleI}>
                    <span className={"key"}>"{eleI}":</span>
                    &nbsp;
                    <span className={"structure"}>&#123;</span>
                    <div className={"box"}>
                        {Object.keys(el).map((key, k) =>
                            <div key={k} >
                                <span className={"key"}>"{key}":</span>
                                &nbsp;
                                <span className={"content"}> "{Object.values(el)[k]}"</span>
                            </div>
                        )}
                    </div>
                    <span className={"structure"}>&#125;</span>
                </div>
            )}
            </div>
            <span className={"structure"}>]</span>
        </>
    )
}
