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
                        <div>
                            <span className={"key"}>"{p}":</span>
                            &nbsp;
                            <span className={"content"}>"{par}"</span>
                        </div>
                    </div>
                )}
            </div>
            <span className={"structure"}>]</span>
        </>
    )
}
