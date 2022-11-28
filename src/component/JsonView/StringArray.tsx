import "../Article.css";
import "./JsonView.css";

type StringArrayParams = {
    strings: string[] | undefined,
}

export default function StringArray({strings}: StringArrayParams) {

    return (
        <>
            <span className={"structure"}>[</span>
            {strings?.map((par, p) =>
                <div key={p} className={"box"}>
                    <div className={"data-prefix"} data-content={p + ":"}>&nbsp;{par}</div>
                </div>
            )}
            <span className={"structure"}>]</span>
        </>
    )
}
