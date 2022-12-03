import "../Article.css";
import "./JsonView.css";

type StringArrayParams = {
    strings: string[] | undefined,
}

export default function StringArray({strings}: StringArrayParams) {

    return (
        <>
            <span className={"structure"}>[</span>
            <div className={"box"}>
                {strings?.map((par, p) =>
                    <div key={p}>
                        <div className={"notJsonPrefix"} data-content={p + ":"}>
                            &nbsp;
                            <span className={"content"}>"{par}"</span>
                                {p < strings.length-1 && <span className={"structure"}>,</span>
                                }
                        </div>
                    </div>
                )}
            </div>
            <span className={"structure"}>]</span>
        </>
    )
}
