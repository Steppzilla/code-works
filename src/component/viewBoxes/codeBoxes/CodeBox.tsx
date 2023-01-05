import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import "./codeBox.css";
import {CSSProperties} from "react";

type CodeBoxProps = {
    title: string,
    actualStyleName: string,
    actualStyle: { [key: string]: CSSProperties; },
    inputString: string,
    language: string,
    showLineNumbers: boolean,
}

export default function CodeBox({title,actualStyleName, actualStyle, inputString, language, showLineNumbers}: CodeBoxProps) {

    return (
        <>
            {(title?.length>=1)&&<h3>{title}</h3>}
            <div className={"codeBox " + actualStyleName}>
                <SyntaxHighlighter
                    language={language}
                    style={actualStyle}
                    wrapLines={true}
                    showLineNumbers={showLineNumbers}>
                    {inputString}
                </SyntaxHighlighter>
            </div>
        </>)
}
