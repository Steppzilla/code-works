import "../Article.css";
import "./JsonView.css";

type ObjectArrayParams = {
    objects: object[]|undefined,
}

export default function ObjectArray({objects}: ObjectArrayParams) {

    return (
        <>
            <span  className={"structure"}>[</span>
            {objects?.map((el, eleI) =>
                <div key={eleI} className={"box data-prefix"}
                     data-content={eleI + ":"}>
                    &nbsp;
                    <span className={"structure"}>&#123;</span>
                    <div className={"box"}>
                        {Object.keys(el).map((key, k) =>
                            <div key={k} className={"data-prefix"} data-content={key+":"}>
                                &nbsp;{Object.values(el)[k]}
                            </div>
                        )}
                    </div>
                    <span className={"structure"}>&#125;</span>
                </div>
            )}
            <span className={"structure"}>]</span>
        </>
    )
}
